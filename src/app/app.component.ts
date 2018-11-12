import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment.prod';
import { AppStateService } from './services/app-state.service';
import { environment as env } from '@env/environment';
import { AuthService } from './services/auth.service';
import { Auth } from './models/auth';
import { User } from './models/user';
import { Skill } from './models/skill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'Suara.in';

  constructor(
    public appStateService: AppStateService,
    private authService: AuthService
  ) {}

  verifyToken(): void { 
    const localstorage = window.localStorage;
    const authToken = localStorage.getItem(env.authStorageKey);
    this.appStateService.setIsAppLoading(true);
    if(authToken == null || authToken == undefined) {
      this.appStateService.setIsLogin(false);
      this.appStateService.setIsAppLoading(false);
    } else {
      this.authService.$verifyToken(authToken)
        .subscribe(response => {
          const authData = new Auth(
            response.token,
            new User(
              response.user.id,
              response.user.first_name,
              response.user.last_name,
              response.user.email,
              response.user.updated_at,
              response.user.created_at,
              response.user.avatar,
              response.user.username,
              response.user.birthdate,
              response.user.hometown,
              response.user.phone_number,
              response.user.facebook_id,
              response.user.twitter_id,
              response.user.skills.map(skill => new Skill(skill.id, skill.skill_name, skill.is_primary)),
              response.user.activities_and_interest,
              response.user.organization_team_clubs,
              response.user.privacy_setting
            )
          )
          this.appStateService.setIsLogin(true);
          this.appStateService.setAuthUserData(authData);
          this.authService.saveTokenToStorage(response.token);
          this.appStateService.setIsAppLoading(false);
        }, error => {
          this.appStateService.setIsAppLoading(false);
          localStorage.removeItem(env.authStorageKey);
        })
    }
  }

  ngOnInit() {
    this.verifyToken();
  }
  
  onClick(event): void {
    this.appStateService.setIsShowAccountMenu(false);
  }
}
