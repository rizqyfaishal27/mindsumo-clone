import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment as env } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

  submissionUrl: string = "/submissions/"

  constructor(
    public http: HttpClient,
    private authService: AuthService
  ) { }

  $saveSubmission(submissionObject: any): Observable<any> {
    const httpOptions = {
      headers: this.authService.generateAuthenticatedHeader(false)
    };
    console.log(httpOptions);
    return this.http.post(env.apiBaseUrl + this.submissionUrl, submissionObject, httpOptions);
  }


}
