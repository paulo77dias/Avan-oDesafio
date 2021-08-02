import { PostUserService } from './services/postUserService';
import { EditPostDto } from './dtos/editPostDto';
import { Body, Controller, Delete, Get, Param, Post, Put, Request, UnauthorizedException } from "@nestjs/common";

import { Observable } from "rxjs";

import { CreatePostDto } from "./dtos/createpostDto";
import { PostDto } from "./dtos/postDto";
import { PostEntity } from "./entities/postEntity";
import { PostService } from './services/postService';
import { UserPostAdd } from './dtos/userPostAdd';
import { UserPost } from './dtos/userPost';
import { AuthService } from './auth/auth.service';
import { reject } from 'lodash';
import { error } from 'console';

@Controller('posts')
export class PostController {

    constructor(private postService:PostService,
                private postUserService : PostUserService,
                private authService: AuthService){}

    @Get()
    findAll() : Observable<PostEntity[]>{
        return this.postService.findAll();
    }

    @Post()
    create(@Body() createpostDto:CreatePostDto):Promise<PostDto >{
        return this.postService.create(createpostDto);
    }

    @Post('/register')
    createUser(@Body() creatUser:UserPostAdd):Promise<UserPost>{

        return this.postUserService.create(creatUser)
    }


    @Put()
    edit(@Body() editPostDto:EditPostDto):Promise<PostDto >{
        return this.postService.edit(editPostDto);
    }

    @Delete(':id')
    delete(@Param() postId: number){
        this.postService.delete(postId );
    }

    @Get('/teste/:teste')
    teste(@Param() teste?: string):string{
        return 'hello '+ teste['teste'];
    }

    @Post('/auth/login')
    async login(@Request() req) {

       return this.postUserService.login(req.body)
        .then((res)=>{
            if (res == undefined) {
                throw  new UnauthorizedException();
            }else{
                
            return this.authService.login(req.body)
        }
    })
            

        
    
    }

}