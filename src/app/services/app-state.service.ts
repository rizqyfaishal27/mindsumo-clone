import { Injectable } from '@angular/core';
import { AppState } from '@app/models/app-state';
import { Auth } from '@app/models/auth';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  state: AppState = new AppState();
  constructor() { }

  setIsLogin(val: boolean) {
    this.state.setIsLogin(val);
  }

  setIsHomePageLoading(val: boolean) {
    this.state.setIsHomePageLoading(val);
  }

  setIsShowAuthDialog(val: boolean) {
    console.log(this.state);
    this.state.setIsShowAuthDialog(val);
  }

  setAuthUserData(authData: Auth) {
    this.state.setAuthData(authData);
  }

  getState(): AppState {
    return this.state;
  }

  setIsAppLoading(val: boolean): void {
    this.state.setIsAppLoading(val);
  }

  setIsShowAccountMenu(val: boolean): void {
    this.state.setIsShowAccountMenu(val);
  }

  setIsAccountCreatePageLoading(val: boolean): void {
    this.state.setIsAccountCreatePageLoading(val);
  }

  setIsAfterRegister(val: boolean): void {
    this.state.setIsAfterRegister(val);
  }

  setNextChallengeLink(link: string) {
    this.state.setNextChallengeLink(link);
  }
}
