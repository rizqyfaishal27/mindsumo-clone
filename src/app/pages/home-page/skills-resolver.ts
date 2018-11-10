import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SkillService } from '@app/services/skill.service';

@Injectable()
export class SkillsResolver implements Resolve<Observable<any>> {
    constructor(
        private skillService: SkillService
    ) {}

    public resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any> {
       return this.skillService.$getSkills();
    }
}