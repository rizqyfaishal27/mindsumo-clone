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
import { VerifyEmailPageComponent } from './pages/verify-email-page/verify-email-page.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { AccountCreatePageComponent } from './pages/account-create-page/account-create-page.component';
import { ChallengeDetailPageComponent } from './pages/challenge-detail-page/challenge-detail-page.component';
import { ChallengeDetailHeaderComponent } from './components/challenge-detail-header/challenge-detail-header.component';
import { SkillTagComponent } from './components/skill-tag/skill-tag.component';
import { StartDraftingButtonComponent } from './components/start-drafting-button/start-drafting-button.component';

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
    VerifyEmailPageComponent,
    CustomButtonComponent,
    CustomInputComponent,
    AccountCreatePageComponent,
    ChallengeDetailPageComponent,
    ChallengeDetailHeaderComponent,
    SkillTagComponent,
    StartDraftingButtonComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
