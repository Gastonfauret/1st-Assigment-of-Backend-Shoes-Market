import { Module } from '@nestjs/common';
import { ShoesModule } from './shoes/shoes.module';


@Module({
  imports: [ShoesModule],
  controllers: [ ],
  providers: [ ],
})
export class AppModule { }
