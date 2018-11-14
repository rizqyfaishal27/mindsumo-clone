import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '@app/pages/home-page/home-page.component';
import { ForgotPasswordPageComponent } from '@app/pages/forgot-password-page/forgot-password-page.component';
import { AccountCreatePageComponent } from '@app/pages/account-create-page/account-create-page.component';
import { ChallengeDetailPageComponent } from '@app/pages/challenge-detail-page/challenge-detail-page.component';
import { AccountProfilePageComponent } from '@app/pages/account-profile-page/account-profile-page.component';
import { EditProfilePageComponent } from '@app/pages/edit-profile-page/edit-profile-page.component';
import { NotFoundPageComponent } from '@app/pages/not-found-page/not-found-page.component';
import { AppWrapperComponent } from '@app/pages/app-wrapper/app-wrapper.component';
import { ChallangesBySkillPageComponent } from './pages/challanges-by-skill-page/challanges-by-skill-page.component';


import { SkillsResolver } from '@app/pages/home-page/skills-resolver';
import { ChallengesResolver } from '@app/pages/home-page/challenges-resolver';
import { ChallengeResolver } from '@app/pages/challenge-detail-page/challenge-resolver';
import { VerifyTokenResolver } from '@app/pages/app-wrapper/verify-token-resolver';
import { ChallengesBySkillResolver } from '@app/pages/challanges-by-skill-page/challenges-by-skill-resolver';


const routes: Routes = [
  {
    path: '',
    component: AppWrapperComponent,
    resolve: {
      authData: VerifyTokenResolver
    },
    children: [
      { 
        path: '',
        component: HomePageComponent,
        resolve: {
          skills: SkillsResolver,
          challenges: ChallengesResolver
        }
      },
      {
        path: 'challenges/:skill',
        component: ChallangesBySkillPageComponent,
        resolve: {
          challenges: ChallengesBySkillResolver,
          skills: SkillsResolver,
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
      },
      {
        path: '**',
        component: NotFoundPageComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
