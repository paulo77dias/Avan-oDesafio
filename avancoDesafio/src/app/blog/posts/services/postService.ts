import { EditPostDto } from './dataModel/editPostDto';
import { PostDto } from './dataModel/postDto';
import { PostResource } from './postResource';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { CreatePostDto } from './dataModel/createPostDto';








@Injectable()

export class PostService {

        constructor(private postResource: PostResource) { }

        public getAllItens(): Observable<PostDto[]> {
                return this.postResource.findAll();
        }

        public createPost(createPostDto:CreatePostDto):Observable<PostDto>{
                return this.postResource.create(createPostDto) ;
        }

        public editPost(editPostDto:EditPostDto):Observable<PostDto>{
                return this.postResource.edit(editPostDto)
        }

        public deletePost(postId:number):Observable<void>{
                return this.postResource.delete(postId);
        }

}