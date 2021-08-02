import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from './../../dialogs/confirmationDialogComponent';
import { CreatePostDialogComponent } from './../dialogs/createPostDialogComponent';
import { PostDto } from '../services/dataModel/postDto';
import { PostService } from '../services/postService';
import { Component, OnInit } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { finalize } from 'rxjs/operators';
import * as _ from 'lodash';
import { EditPostDto } from '../services/dataModel/editPostDto';
import { MatSnackBar } from '@angular/material/snack-bar';












@Component({
    selector:'ap-post-list',
    templateUrl:'postListComponent.html',
    styleUrls:['postListComponent.scss']
})

export class PostListComponent implements OnInit{
    public displayedColumns: string[] = ['id','title', 'subtitle', 'imageurl','action'];
    public isLoading = false;
    
    private postListSubject:BehaviorSubject<PostDto[]> = new BehaviorSubject<any>(null);

    constructor(
            private postservice:PostService,
            private matDialog:MatDialog,
            private snackBar:MatSnackBar,
            private route:Router
            
            ){}

    ngOnInit(){
        this.isLoading = true
        this.postservice.getAllItens()
        .pipe(finalize(()=>this.isLoading = false))
        .subscribe((postListItens)=> this.postListSubject.next(postListItens));
    }

    public logout(){
       localStorage.removeItem('CurrentUser')
       this.route.navigate(['login'])
}

    public getPostList():Observable<PostDto[]>{
            return this.postListSubject.asObservable();
    }

    public editPost(editPost:EditPostDto){
        const ref =this.matDialog.open(CreatePostDialogComponent, {
               width: '600px',
               data: {editPostDto:editPost}
              });
              ref.afterClosed().subscribe((editPostDto:PostDto)=>{
                console.log('Dialog closed')
               if (editPostDto) {
                       const list = this.postListSubject.getValue();
                       const postIndex = _.findIndex(list, post=>post.id === editPostDto.id);
                       list[postIndex] = editPostDto;
                       this.postListSubject.next(_.cloneDeep(list));
               }
        });
        
    }

    public deletePost(postDto:PostDto){
        const ref = this.matDialog.open(ConfirmationDialogComponent,{width:'250px'})
        ref.afterClosed().subscribe((canContinue=>{
                if (canContinue) {
                        this.isLoading = true;
                        this.postservice.deletePost(postDto.id)
                                .pipe(finalize(()=>this.isLoading = false))
                                .subscribe(()=>{
                                 const list = this.postListSubject.getValue();
                                _.remove(list, post=>post.id === postDto.id);
                                this.postListSubject.next(_.cloneDeep(list));

                                this.snackBar.open('Post ' + postDto.title +' has been removed','',{duration:2000})
                                });
                }
        }))
    }

    public createPost(){
        const ref =this.matDialog.open(CreatePostDialogComponent, {
               
                width: '600px',
              });
        
        ref.afterClosed().subscribe((newPostDto:PostDto)=>{
                console.log('Dialog closed')
               if (newPostDto) {
                       const list = this.postListSubject.getValue();
                       list.push(newPostDto);
                       this.postListSubject.next(_.cloneDeep(list));
                       this.snackBar.open('Post ' + newPostDto.title +' has been created','',{duration:2000})
               }
        })
    }

}