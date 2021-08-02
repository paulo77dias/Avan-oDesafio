import { LoginService } from './service/login.service';
import {NgModule} from '@angular/core';
import {LoginComponent} from './loginComponent';
import {CommonModule} from '@angular/common';
import {CommonMaterialModule} from '../common/material/commonMaterialModules';
import {RouterModule} from '@angular/router';
import {LoginRoutes} from './loginComponentRoutes';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        CommonMaterialModule,
        FormsModule,
        RouterModule.forChild(LoginRoutes)
    ],
    exports: [],
    declarations: [LoginComponent],
    providers: [LoginService],
})
export class LoginModule {
}
