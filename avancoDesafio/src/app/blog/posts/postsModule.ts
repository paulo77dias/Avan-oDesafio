import { CommonModule } from '@angular/common';
import { CommonMaterialModule } from './../../common/material/commonMaterialModules';
import { CreatePostDialogComponent } from './dialogs/createPostDialogComponent';

import { PostListModule } from '././list/postListModule';
import { NgModule } from "@angular/core"
import { PostService } from './services/postService';
import { PostResource } from './services/postResource';
import { FormsModule } from '@angular/forms';





@NgModule({
    imports:[
        PostListModule,
        FormsModule,
        CommonMaterialModule,
        CommonModule
        
    ],
    exports:[PostListModule],
    declarations:[
        CreatePostDialogComponent
    ],
    entryComponents:[CreatePostDialogComponent],
    providers:[PostResource,PostService]
})

export class PostModule{}