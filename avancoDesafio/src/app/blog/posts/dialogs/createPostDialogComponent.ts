import { EditPostDto } from './../services/dataModel/editPostDto';

import { PostService } from './../services/postService';
import { CreatePostDto } from './../services/dataModel/createPostDto';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { finalize} from 'rxjs/operators'

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import * as _ from 'lodash';
import { PostDto } from '../services/dataModel/postDto';
import { Observable } from 'rxjs';
@Component({
        selector:'ap-create-post-dialog',
        templateUrl:'createPostDialog.html'
})

export class CreatePostDialogComponent implements OnInit  {

        public postModel: CreatePostDto | EditPostDto = {} as CreatePostDto;
        public isLoading = false;
        public isEditing = false;

        constructor(private dialogref:MatDialogRef<CreatePostDialogComponent>,
                    private postService:PostService,
                    @Inject(MAT_DIALOG_DATA) public data: {editPostDto:EditPostDto}){}


        ngOnInit(): void {
               this.isEditing = !!_.get(this.data,'editPostDto')
              

               if(this.isEditing){
                        
                     this.postModel = _.clone(this.data .editPostDto) 
               }
        }

       

        public submit(form:NgForm){
               
                if (form.valid) {
                        this.isLoading = true
                        this.handleAfterSubmit(this.isEditing?
                                this.postService.editPost(this.postModel as EditPostDto ):
                                this.postService.createPost(this.postModel as CreatePostDto));
                        this.postService.createPost(this.postModel as CreatePostDto)
                        
                }
        }


        private handleAfterSubmit(observable: Observable<PostDto>){
                return observable
                .pipe(finalize(()=>this.isLoading = false))
                        .subscribe((response)=>{
                                this.dialogref.close(response);
                        }
                        )
        }



}