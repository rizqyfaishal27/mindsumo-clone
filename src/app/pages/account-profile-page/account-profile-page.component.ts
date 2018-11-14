import { Component, OnInit } from '@angular/core';
import { AppStateService } from '@app/services/app-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-profile-page',
  templateUrl: './account-profile-page.component.html',
  styleUrls: ['./account-profile-page.component.scss']
})
export class AccountProfilePageComponent implements OnInit {

  isLoading: boolean = false;

  constructor(
    public appStateService: AppStateService,
    private router: Router
  ) { }

  ngOnInit() {
    if(!this.appStateService.getState().isLogin) {
      this.router.navigateByUrl('');
    }
  }

}
