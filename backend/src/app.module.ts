import { Module } from '@nestjs/common';
import { ShoesModule } from './shoes/shoes.module';
import { UsersModule } from './users/users.module';
import { ClothesModule } from './clothes/clothes.module';


@Module({
  imports: [ShoesModule, UsersModule, ClothesModule],
  controllers: [ ],
  providers: [ ],
})
export class AppModule { }
