import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '@app/services/auth.service';
import { AppStateService } from '@app/services/app-state.service';
import { Auth } from '@app/models/auth';
import { User, UserSubmission } from '@app/models/user';
import { Skill } from '@app/models/skill';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Input() icon: boolean;
  isLoading: boolean = false;
  errors: any = null;
  model = {
    email: null,
    password: null
  }
  

  constructor(
    private authService: AuthService,
    public appStateService: AppStateService) { 

  }

  ngOnInit() {
    
  }

  onSubmit(event): void {
    this.isLoading = true;
    this.authService.$login(this.model.email, this.model.password)
      .subscribe(response => {
        this.isLoading = false;
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
            response.user.submissions.map(submission => 
              new UserSubmission(submission.id, submission.challenge))
          )
        )
        this.appStateService.setIsLogin(true);
        this.appStateService.setAuthUserData(authData);
        this.authService.saveTokenToStorage(response.token);
        this.appStateService.setIsShowAuthDialog(false);
      }, error => {
        this.isLoading = false;
        if(error.status == 400) {
          this.errors = error.error;
        }
      })
      
  }

}
