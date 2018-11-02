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
    AuthDialogComponent  
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
