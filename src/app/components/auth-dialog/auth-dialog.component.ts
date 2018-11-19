import { Component, OnInit, Input } from '@angular/core';
import { AppStateService } from '@app/services/app-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialogComponent implements OnInit {

  @Input() show: boolean;

  constructor(
    public appStateService: AppStateService,
    private route: Router
  ) { }

  ngOnInit() {
  }

  onCreateNewAccountClick(): void {
    this.appStateService.setIsShowAuthDialog(false);
    this.route.navigateByUrl('/account-create');
  }

  onForgotPasswordClick(): void {
    this.appStateService.setIsShowAuthDialog(false);
    this.route.navigateByUrl('/forgot-password');
  }
}
