import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { PostUserService } from './services/postUserService';
import { UserPostEntity } from './entities/userPostEntity';
import { PostController } from './postController';
import { PostService } from './services/postService';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './entities/postEntity';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([PostEntity,UserPostEntity]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'blog-user',
      password: '123',
      database: 'blog-app',
      entities: [PostEntity,UserPostEntity],
      synchronize: true,
    }),
   
  ],
  controllers: [PostController],
  providers: [PostService,PostUserService],
})
export class BlogModule {}
