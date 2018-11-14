import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { environment as env } from '@env/environment';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  challengeUrl = '/challenges/';

  constructor(public http: HttpClient) { }

  getChallengeDetailUrl(id: number): string {
    return env.apiBaseUrl + this.challengeUrl + id + '/';
  }

  $getChallenges(): Observable<any> {
    return this.http.get(env.apiBaseUrl + this.challengeUrl);
  }

  $getChallengesBySkill(skill: string): Observable<any> {
    return this.http.get(env.apiBaseUrl + this.challengeUrl, {
      params: {
        skill: skill
      }
    });
  }

  $getChallengeDetail(id: number): Observable<any> {
    return this.http.get(this.getChallengeDetailUrl(id))
      .pipe(
        catchError(error => {
          return of(null);
        })
      )
  }

  $getNextChallenges(link: string): Observable<any> {
    return this.http.get(link);
  }



}
