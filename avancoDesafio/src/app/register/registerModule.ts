import { RegisterService } from './service/registerService';
import { RegisterRoutes } from './registerComponentRoutes';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommonMaterialModule} from '../common/material/commonMaterialModules';
import {RouterModule} from '@angular/router';

import {FormsModule} from '@angular/forms';
import { RegisterComponent } from './registerComponent';

@NgModule({
    imports: [
        CommonModule,
        CommonMaterialModule,
        FormsModule,
        RouterModule.forChild(RegisterRoutes)
    ],
    exports: [],
    declarations: [RegisterComponent],
    providers: [RegisterService],
})
export class RegisterModule {
}