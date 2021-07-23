import { EditPostDto } from './dtos/editPostDto';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

import { Observable } from "rxjs";

import { CreatePostDto } from "./dtos/createpostDto";
import { PostDto } from "./dtos/postDto";
import { PostEntity } from "./entities/postEntity";
import { PostService } from './services/postService';

@Controller('posts')
export class PostController {

    constructor(private postService:PostService){}

    @Get()
    findAll() : Observable<PostEntity[]>{
        return this.postService.findAll();
    }

    @Post()
    create(@Body() createpostDto:CreatePostDto):Promise<PostDto >{
        return this.postService.create(createpostDto);
    }

    @Put()
    edit(@Body() editPostDto:EditPostDto):Promise<PostDto >{
        return this.postService.edit(editPostDto);
    }

    @Delete(':id')
    delete(@Param() postId: number){
        this.postService.delete(postId );
    }
    
}