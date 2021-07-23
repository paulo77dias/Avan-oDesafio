import { PostController } from './postController';
import { PostService } from './services/postService';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './entities/postEntity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostEntity]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'blog-user',
      password: '123',
      database: 'blog-app',
      entities: [PostEntity],
      synchronize: true,
    }),
   
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class BlogModule {}
