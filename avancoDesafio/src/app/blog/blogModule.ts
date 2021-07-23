import { BlogRouting } from './blogRouting';
import { RouterModule } from '@angular/router';
import { CommonMaterialModule } from './../common/material/commonMaterialModules';
import { ConfirmationDialogComponent } from './dialogs/confirmationDialogComponent';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core"
import { PostModule } from "./posts/postsModule";
import { BlogGuard } from './guards/blogGuard';


@NgModule({
    imports:[PostModule, HttpClientModule,CommonMaterialModule, RouterModule.forChild(BlogRouting),],
    exports:[PostModule,CommonMaterialModule],
    declarations:[ConfirmationDialogComponent],
    entryComponents:[ConfirmationDialogComponent],
    providers: [
        BlogGuard
    ],
    
   
})

export class BlogModule{}

