import { Component, OnInit } from '@angular/core';
import { AppStateService } from '@app/services/app-state.service';
import { AuthService } from '@app/services/auth.service';
import { Router } from '@angular/router';
import { environment as env } from '@env/environment';
import { Auth } from '@app/models/auth';
import { User } from '@app/models/user';
import { Skill } from '@app/models/skill';

@Component({
  selector: 'app-account-create-page',
  templateUrl: './account-create-page.component.html',
  styleUrls: ['./account-create-page.component.scss']
})
export class AccountCreatePageComponent implements OnInit {
  isLoading: boolean = false;
  user: any = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  errors: any = {

  }
  submittedEmailField: string;

  constructor(
    public appStateService: AppStateService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if(this.appStateService.getState().isLogin) {
      this.router.navigateByUrl("");
    }
  }

  onEmailChange(e) {
    this.errors = {};
  }

  onSubmit() {
    this.isLoading = true;
    this.submittedEmailField = this.user.email;
    this.authService.$register(
      this.user.email,
      this.user.firstName,
      this.user.lastName,
      this.user.password
    )
    .subscribe(response => {
      this.router.navigateByUrl("");
      this.appStateService.setIsAfterRegister(true);
      const email = response.email;
      const password = this.user.password;
      this.authService.$login(email, password)
        .subscribe(responseLogin => {
          this.isLoading = false;
          const token = responseLogin.token;
          this.authService.saveTokenToStorage(token);
          this.appStateService.setIsLogin(true);
          const authData = new Auth(
            responseLogin.token,
            new User(
              responseLogin.user.id,
              responseLogin.user.first_name,
              responseLogin.user.last_name,
              responseLogin.user.email,
              responseLogin.user.updated_at,
              responseLogin.user.created_at,
              responseLogin.user.avatar,
              responseLogin.user.username,
              responseLogin.user.birthdate,
              responseLogin.user.hometown,
              responseLogin.user.phone_number,
              responseLogin.user.facebook_id,
              responseLogin.user.twitter_id,
              responseLogin.user.skills.map(skill => new Skill(skill.id, skill.skill_name, skill.is_primary)),
              responseLogin.user.activities_and_interest,
              responseLogin.user.organization_team_clubs,
              responseLogin.user.privacy_setting
            )
          );
          this.appStateService.setAuthUserData(authData);
        })
    }, error => {
      this.isLoading = false;
      if(error.status == 400) {
        this.errors = {
          ...error.error
        }
      }
    })
  }
}
