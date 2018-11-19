import { Component, OnInit } from '@angular/core';
import { AppStateService } from '@app/services/app-state.service';
import { Router } from '@angular/router';
import { AuthService } from '@app/services/auth.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {

  companyLogoImageSrc = '/assets/logo.png';
  authButtonSvgIcon = '/assets/sign-in.svg';

  constructor(
    public appStateService: AppStateService,
    private authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    
  }

  onClick() {
    this.appStateService.setIsShowAuthDialog(true);
  }

  onAccountClick(e) {
    e.stopPropagation();
    this.appStateService.setIsShowAccountMenu(true);
  }

  onLogoutClick(e) {
    e.preventDefault();
    this.authService.logout();
  }

}
