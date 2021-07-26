import { UserPostAdd } from './../dtos/userPostAdd';
import { UserPostEntity } from './../entities/userPostEntity';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserPost } from '../dtos/userPost';

@Injectable()
export class PostUserService{

    constructor( @InjectRepository(UserPostEntity)
         private readonly postRepository: Repository<UserPostEntity>){}
        
         public create(createUser: UserPostAdd):Promise<UserPost>{
            return this.postRepository.save(createUser);
         }
   
}