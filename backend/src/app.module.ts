import { Module } from '@nestjs/common';
import { ShoesController } from './shoes/shoes.controller';
import { ShoesService } from './shoes/shoes.service';

@Module({
  imports: [],
  controllers: [ ShoesController],
  providers: [ ShoesService],
})
export class AppModule { }
