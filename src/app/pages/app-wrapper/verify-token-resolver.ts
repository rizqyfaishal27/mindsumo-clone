import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@app/services/auth.service';

@Injectable()
export class VerifyTokenResolver implements Resolve<Observable<any>> {
    constructor(
        public authService: AuthService
    ) {}

    public resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any> {
            console.log(this.authService);
       return this.authService.verifyToken();
    }
}