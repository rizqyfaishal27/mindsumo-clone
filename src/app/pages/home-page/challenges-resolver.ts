import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ChallengeService } from '@app/services/challenge.service';

@Injectable()
export class ChallengesResolver implements Resolve<Observable<any>> {
    constructor(
        private challengeService: ChallengeService
    ) {}

    public resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any> {
       return this.challengeService.$getChallenges();
    }
}