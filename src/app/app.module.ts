import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavButtonComponent } from './components/nav-button/nav-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageHeaderComponent } from './components/home-page-header/home-page-header.component';
import { SkillFilterComponent } from './components/skill-filter/skill-filter.component';
import { TypeFilterComponent } from './components/type-filter/type-filter.component';
import { ChallengeContentComponent } from './components/challenge-content/challenge-content.component';
import { AuthDialogComponent } from './components/auth-dialog/auth-dialog.component';
import { FacebookAuthButtonComponent } from './components/facebook-auth-button/facebook-auth-button.component';
import { TwitterAuthButtonComponent } from './components/twitter-auth-button/twitter-auth-button.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { AccountCreatePageComponent } from './pages/account-create-page/account-create-page.component';
import { ChallengeDetailPageComponent } from './pages/challenge-detail-page/challenge-detail-page.component';
import { ChallengeDetailHeaderComponent } from './components/challenge-detail-header/challenge-detail-header.component';
import { SkillTagComponent } from './components/skill-tag/skill-tag.component';
import { StartDraftingButtonComponent } from './components/start-drafting-button/start-drafting-button.component';
import { AccountProfilePageComponent } from './pages/account-profile-page/account-profile-page.component';
import { EditProfilePageComponent } from './pages/edit-profile-page/edit-profile-page.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingStateComponent } from './components/loading-state/loading-state.component';
import { LoadingStateCompComponent } from './components/loading-state-comp/loading-state-comp.component';

import { SkillsResolver } from '@app/pages/home-page/skills-resolver';
import { ChallengesResolver } from '@app/pages/home-page/challenges-resolver';
import { ChallengeResolver } from './pages/challenge-detail-page/challenge-resolver';
import { VerifyTokenResolver } from '@app/pages/app-wrapper/verify-token-resolver';
import { ConfirmPasswordDirective } from './directives/confirm-password.directive';
import { ChallengesBySkillResolver } from '@app/pages/challanges-by-skill-page/challenges-by-skill-resolver';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { MomentModule } from 'ngx-moment';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { FileAccessDirective } from './directives/file-access.directive';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router';
import { AppWrapperComponent } from './pages/app-wrapper/app-wrapper.component';
import { ChallangesBySkillPageComponent } from './pages/challanges-by-skill-page/challanges-by-skill-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    NavButtonComponent,
    FooterComponent,
    HomePageHeaderComponent,
    SkillFilterComponent,
    TypeFilterComponent,
    ChallengeContentComponent,
    AuthDialogComponent,
    FacebookAuthButtonComponent,
    TwitterAuthButtonComponent,
    LoginFormComponent,
    ForgotPasswordPageComponent,
    CustomButtonComponent,
    CustomInputComponent,
    AccountCreatePageComponent,
    ChallengeDetailPageComponent,
    ChallengeDetailHeaderComponent,
    SkillTagComponent,
    StartDraftingButtonComponent,
    AccountProfilePageComponent,
    EditProfilePageComponent,
    LoadingStateComponent,
    LoadingStateCompComponent,
    ConfirmPasswordDirective,
    NotFoundPageComponent,
    FileAccessDirective,
    AppWrapperComponent,
    ChallangesBySkillPageComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    MomentModule,
    NgProgressModule.forRoot(),
    NgProgressRouterModule
  ],
  providers: [
    SkillsResolver,
    ChallengesResolver,
    ChallengeResolver,
    VerifyTokenResolver,
    ChallengesBySkillResolver
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
