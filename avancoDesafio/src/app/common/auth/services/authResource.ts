import {Injectable} from '@angular/core';
import {UserLogin} from '../../user/dataModel/userLogin';
import {of, Observable} from 'rxjs';
import {AuthToken} from '../dataModel/authToken';
import {HttpClient} from '@angular/common/http';
import {ApiConfig} from '../../../blog/apiConfig';

@Injectable()
export class AuthResource {

    private readonly URL = ApiConfig + '/auth';

    constructor(private readonly httpClient: HttpClient) {
    }

    public signInUser(user: UserLogin): Observable<AuthToken> {
            
        return of({expires_in: 16000, token: user.email+'aSecretTokenString'}) ;
    }
}
