import { Component, OnInit } from '@angular/core';
import { AppStateService } from '@app/services/app-state.service';

@Component({
  selector: 'app-account-profile-page',
  templateUrl: './account-profile-page.component.html',
  styleUrls: ['./account-profile-page.component.scss']
})
export class AccountProfilePageComponent implements OnInit {

  constructor(
    public appStateService: AppStateService
  ) { }

  ngOnInit() {
  }

}
