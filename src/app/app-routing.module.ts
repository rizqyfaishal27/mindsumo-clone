import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '@app/pages/home-page/home-page.component';
import { ForgotPasswordPageComponent } from '@app/pages/forgot-password-page/forgot-password-page.component';
import { VerifyEmailPageComponent } from '@app/pages/verify-email-page/verify-email-page.component';
import { ChallengeDetailPageComponent } from '@app/pages/challenge-detail-page/challenge-detail-page.component';

const routes: Routes = [
  { 
    path: '',
    component: HomePageComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordPageComponent
  },
  {
    path: 'verify-email',
    component: VerifyEmailPageComponent
  },
  {
    path: 'challenge-detail',
    component: ChallengeDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
