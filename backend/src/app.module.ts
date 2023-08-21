import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShoesController } from './shoes.controller';

@Module({
  imports: [],
  controllers: [AppController, ShoesController],
  providers: [AppService],
})
export class AppModule { }
