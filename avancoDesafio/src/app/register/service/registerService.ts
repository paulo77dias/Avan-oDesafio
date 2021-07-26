import { UserCreated } from './../../common/user/dataModel/userCreated';
import { CreateUser } from './../../common/user/dataModel/createUser';
import { ApiConfig } from './../../blog/apiConfig';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RegisterService {
        private readonly URL = ApiConfig.url + '/posts/register'
        constructor(private httpClient:HttpClient){}


        public create(createUser:CreateUser):Observable<UserCreated>{
                console.log('aqui')
                return this.httpClient.post(this.URL,createUser)as Observable<CreateUser>; 
               
        }
}
