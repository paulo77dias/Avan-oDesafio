import { UserLogin } from './../../common/user/dataModel/userLogin';
import { UserCreated } from './../../common/user/dataModel/userCreated';
import { CreateUser } from './../../common/user/dataModel/createUser';
import { ApiConfig } from './../../blog/apiConfig';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
        private readonly URL = ApiConfig.url + '/posts/auth/login'
        constructor(private httpClient:HttpClient){}


        public login(userLogin:UserLogin):Observable<any>{
                
                return this.httpClient.post(this.URL,userLogin); 
               
        }
}
