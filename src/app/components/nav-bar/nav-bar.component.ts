import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {

  companyLogoImageSrc = '/assets/logo.png';
  authButtonSvgIcon = '/assets/sign-in.svg';

  constructor() { }

  ngOnInit() {
    
  }

}
