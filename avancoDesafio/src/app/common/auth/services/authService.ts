import {Injectable} from '@angular/core';
import {UserLogin} from '../../user/dataModel/userLogin';
import {Observable} from 'rxjs';
import {AuthResource} from './authResource';
import {AuthToken} from '../dataModel/authToken';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import * as _ from 'lodash';

@Injectable()
export class AuthService {
    private readonly AUTH_STORAGE_KEY = 'auth_token';

    constructor(private readonly resource: AuthResource,
                private readonly router: Router) {
    }

    public signIn(user: UserLogin): Observable<void> {
        return this.resource.signInUser(user)
            .pipe(
                map((authToken) => {
                localStorage.setItem('CurrentUser',JSON.stringify(authToken));
                console.log(localStorage.getItem('CurrentUser'))
                    return;
                })
            );
    }

   
  
    public logout() {
        this.cleanToken();
        this.router.navigate(['login']);
    }

    public getToken():any{
            return localStorage.getItem('CurrentUser')
    }

    private cleanToken() {
        localStorage.removeItem('CurrentUser');
    }

   

     
}
