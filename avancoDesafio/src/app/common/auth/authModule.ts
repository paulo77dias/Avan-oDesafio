
import {NgModule} from '@angular/core';
import {AuthResource} from './services/authResource';
import {AuthService} from './services/authService';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        HttpClientModule
    ],
    exports: [],
    declarations: [],
    providers: [
        AuthResource,
        AuthService,
       
    ],
})
export class AuthModule {
}
