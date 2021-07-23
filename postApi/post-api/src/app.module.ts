import { BlogModule } from './blog/blogModule';
import { Module } from '@nestjs/common';

@Module({
  imports: [BlogModule,
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
