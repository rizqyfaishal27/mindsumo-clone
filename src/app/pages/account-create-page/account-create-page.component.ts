import { Component, OnInit } from '@angular/core';
import { AppStateService } from '@app/services/app-state.service';
import { AuthService } from '@app/services/auth.service';

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

  constructor(
    public appStateService: AppStateService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.isLoading = true;
    this.authService.$register(
      this.user.email,
      this.user.firstName,
      this.user.lastName,
      this.user.password
    )
    .subscribe(response => {
      this.isLoading = false;
    }, error => {
      this.isLoading = false;  
    })
  }
}
