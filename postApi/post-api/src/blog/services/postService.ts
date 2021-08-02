import { UserPostEntity } from './../entities/userPostEntity';

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { from, map, Observable } from 'rxjs';
import {  Repository } from "typeorm";
import { CreatePostDto } from "../dtos/createpostDto";
import { PostDto } from "../dtos/postDto";
import * as _ from 'lodash';
import { PostEntity } from "../entities/postEntity";
import { EditPostDto } from "../dtos/editPostDto";








@Injectable()
export class PostService{

    constructor( @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>){}


    public findAll(): Observable<PostEntity[]>  {
     return from(this.postRepository.find())
        .pipe(
            map((posts)=>_.orderBy(posts, ['id'],['desc'])),
        )
    }

    public create(createpostDto: CreatePostDto):Promise<PostDto>{
       return this.postRepository.save(createpostDto);
    }

    public edit(editPostDto: EditPostDto):Promise<PostDto>{
        return this.postRepository.save(editPostDto);
     }

     public delete(postId:number):void{
        this.postRepository.delete(postId);
     }

     

    
}

