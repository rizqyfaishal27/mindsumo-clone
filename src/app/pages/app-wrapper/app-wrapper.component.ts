import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/services/auth.service';
import { AppStateService } from '@app/services/app-state.service';
import { Auth } from '@app/models/auth';
import { User, UserSubmission } from '@app/models/user';
import { Skill } from '@app/models/skill';
import { environment as env } from '@env/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-app-wrapper',
  templateUrl: './app-wrapper.component.html',
  styleUrls: ['./app-wrapper.component.scss']
})
export class AppWrapperComponent implements OnInit {

  constructor(
    private authService: AuthService,
    public appStateService: AppStateService,
    private route: ActivatedRoute
  ) { }

  onClick(event): void {
    this.appStateService.setIsShowAccountMenu(false);
  }

  verifyToken(): void { 
    this.route.data
      .subscribe(data => {
        const response = data.authData;
        if(response != null) {
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
              response.user.privacy_setting,
              response.user.submissions.map(submission => new UserSubmission(submission.id, submission.challenge))
            )
          )
          this.appStateService.setIsLogin(true);
          this.appStateService.setAuthUserData(authData);
          this.authService.saveTokenToStorage(response.token);
          this.appStateService.setIsAppLoading(false);
        } else {
          this.appStateService.setIsAppLoading(false);
          localStorage.removeItem(env.authStorageKey);
        }
      }, error => {
        this.appStateService.setIsAppLoading(false);
        localStorage.removeItem(env.authStorageKey);
      })
  }


  ngOnInit() {
    this.verifyToken();
  }

}
