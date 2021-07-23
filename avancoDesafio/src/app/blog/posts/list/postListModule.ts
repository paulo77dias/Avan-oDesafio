import { CreatePostDialogComponent } from './../dialogs/createPostDialogComponent';
import { CommonMaterialModule } from './../../../common/material/commonMaterialModules';
import { NgModule } from "@angular/core"
import { PostListComponent } from "./postListComponent";
import { CommonModule } from "@angular/common";



@NgModule({
    imports:[
        CommonMaterialModule,
        CommonModule
        
    ],
    exports:[PostListComponent],
    declarations:[
        PostListComponent
    ],
    providers:[]
})

export class PostListModule{}

