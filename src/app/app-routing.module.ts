import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '@app/pages/home-page/home-page.component';
import { ForgotPasswordPageComponent } from '@app/pages/forgot-password-page/forgot-password-page.component';
import { AccountCreatePageComponent } from '@app/pages/account-create-page/account-create-page.component';
import { ChallengeDetailPageComponent } from '@app/pages/challenge-detail-page/challenge-detail-page.component';
import { AccountProfilePageComponent } from '@app/pages/account-profile-page/account-profile-page.component';
import { EditProfilePageComponent } from '@app/pages/edit-profile-page/edit-profile-page.component';

import { SkillsResolver } from '@app/pages/home-page/skills-resolver';
import { ChallengesResolver } from '@app/pages/home-page/challenges-resolver';
import { ChallengeResolver } from '@app/pages/challenge-detail-page/challenge-resolver';

const routes: Routes = [
  { 
    path: '',
    component: HomePageComponent,
    resolve: {
      skills: SkillsResolver,
      challenges: ChallengesResolver
    }
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordPageComponent
  },
  {
    path: 'challenge-detail/:challengeId',
    component: ChallengeDetailPageComponent,
    resolve: {
      challenge: ChallengeResolver
    }
  },
  {
    path: 'account-profile',
    component: AccountProfilePageComponent
  },
  {
    path: 'edit-profile',
    component: EditProfilePageComponent
  },
  {
    path: 'account-create',
    component: AccountCreatePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
