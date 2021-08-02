import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';


@Injectable()
export class BlogGuard implements CanActivate {

    constructor(private readonly router: Router
               ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean|Observable<boolean>|Promise<boolean> {
        

        if (!localStorage.getItem('CurrentUser')) {
            this.router.navigate(['login']);
            return false
        }

        return true
    }
}