import { Injectable } from '@angular/core';
import { Skill } from '@app/models/skill';
import { Observable, of } from 'rxjs';
import { map, tap, catchError, switchMap, flatMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment as env } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  skillUrl: string = '/skills/';

  constructor(public http: HttpClient) { }

  $getSkills(): Observable<any> {
    return this.http.get(env.apiBaseUrl + this.skillUrl);
  }
}
