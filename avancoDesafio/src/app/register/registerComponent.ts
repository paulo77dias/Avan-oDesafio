import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateUser } from './../common/user/dataModel/createUser';
import { templateJitUrl } from "@angular/compiler";
import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
import { RegisterService } from './service/registerService';

@Component({
        selector:'app-register',
        templateUrl:'registerComponent.html'
})

export class RegisterComponent{
        public user = {} as CreateUser;
        public isLoading = false;
        public confirmPassword!:Observable<string>

        constructor(private registerService:RegisterService, private router:Router){}


        public onSubmit(form: NgForm) {
                if (form.value.password == this.confirmPassword) {
                    this.registerService.create(this.user as CreateUser)
                    .subscribe(()=>{
                            this.router.navigateByUrl('login')
                           
                        })
                }else{ 
                alert('Senhas incorretas')
                form.reset()
                }
            }

}