import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { ChallengeService } from '@app/services/challenge.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ChallengeResolver implements Resolve<Observable<any>> {
    constructor(
        private challengeService: ChallengeService
    ) {}

    public resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any> {
      const challengeId =  +route.paramMap.get('challengeId');
      return this.challengeService.$getChallengeDetail(challengeId);
    }                                                           
}