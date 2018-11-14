import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from '@env/environment';
import { AuthService } from './auth.service';
import { AppStateService } from './app-state.service';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  userUrl: string = '/users/';

  constructor(
    public http: HttpClient,
    private authService: AuthService,
    public appStateService: AppStateService  
  ) { }

  $savePersonalData(personalData: any): Observable<any> {
    return this.http.patch(env.apiBaseUrl + this.userUrl 
        + this.appStateService.getState().authData.user.id + '/', 
      personalData,
      {
        headers: this.authService.generateAuthenticatedHeader(true)
      }
    );
  }

  $saveOtherData(otherData: any): Observable<any> {
    return this.http.patch(env.apiBaseUrl + this.userUrl 
        + this.appStateService.getState().authData.user.id + '/', 
      otherData,
      {
        headers: this.authService.generateAuthenticatedHeader(true)
      }
    );
  }

  $saveImageData(imageData: any): Observable<any> {
    return this.http.patch(env.apiBaseUrl + this.userUrl 
        + this.appStateService.getState().authData.user.id + '/', 
      imageData,
      {
        headers: this.authService.generateAuthenticatedHeader(false)
      }
    );
  }
}
