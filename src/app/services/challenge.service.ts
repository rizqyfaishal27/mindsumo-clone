import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '@env/environment'; 

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

  $getChallengeDetail(id: number): Observable<any> {
    return this.http.get(this.getChallengeDetailUrl(id));
  }
}
