import { LoginService } from './service/login.service';
import {Component, OnInit} from '@angular/core';
import {UserLogin} from '../common/user/dataModel/userLogin';
import {NgForm} from '@angular/forms';

import {finalize} from 'rxjs/operators';
import {Router} from '@angular/router';
import { result } from 'lodash';

@Component({
    selector: 'app-login',
    templateUrl: 'loginComponent.html'
})

export class LoginComponent {
    public user = {} as UserLogin;
    public isLoading = false;

    constructor(private loginService :LoginService,
                private readonly router: Router) {
    }

    public onSubmit(form: NgForm) {
        if (form.valid) {
            this.isLoading = true;
            this.loginService.login(this.user)
                .pipe(finalize(() => this.isLoading = false))
                
                .subscribe((res) => {
                        
                        localStorage.setItem('CurrentUser',JSON.stringify(res))
                        this.router.navigate([''])

                },
                err=>{alert('Bad username or password')});
        }
    }
}
