import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from '@env/environment';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { AppStateService } from './app-state.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public http: HttpClient,
    private router: Router,
    public appStateService: AppStateService
  ) { }
  authLoginUrl: string = '/auth/';
  authRegisterUrl: string = '/auth-register/';
  authVerifyTokenUrl: string = '/auth-verify/';

  generateAuthenticatedHeader(json: boolean): HttpHeaders {
    const localstorage = window.localStorage;
    const key = env.authStorageKey;
    const token = localstorage.getItem(key);
    if(token == undefined) {
      return null;
    } else {
      if(json) {
        const header = new HttpHeaders({
          'Authorization': `JWT ${token}`,
          'Content-Type': 'application/json'
        })
        return header;
      }
      const header = new HttpHeaders({
        'Authorization': `JWT ${token}`,
      })
      return header;
    }
  }


  $login(email: string, password: string): Observable<any> {
    return this.http.post(env.apiBaseUrl + this.authLoginUrl, 
      {
        email,
        password
      }
    );
  }

  $verifyToken(token: string): Observable<any> {
    return this.http.post(env.apiBaseUrl + this.authVerifyTokenUrl, {
      token: token
    })
  }

  $register(email: string, firstName: string, lastName: string, password: string): Observable<any> {
    return this.http.post(env.apiBaseUrl + this.authRegisterUrl, {
      email,
      password,
      first_name: firstName,
      last_name: lastName
    })
  }

  saveTokenToStorage(token: string): void {
    const localstorage = window.localStorage;
    localstorage.setItem(env.authStorageKey, token);
  }

  logout(): void {
    const localstorage = window.localStorage;
    localstorage.removeItem(env.authStorageKey);
    this.appStateService.setIsLogin(false);
    this.appStateService.setAuthUserData(null);
    this.router.navigateByUrl('', { replaceUrl: true });
  }

  verifyToken(): Observable<any> {
    const localstorage = window.localStorage;
    const authToken = localStorage.getItem(env.authStorageKey);
    this.appStateService.setIsAppLoading(true);
    if(authToken == null || authToken == undefined) {
      this.appStateService.setIsLogin(false);
      this.appStateService.setIsAppLoading(false);
      return of(null);
    } else {
      return this.$verifyToken(authToken);
    }
  }

}
