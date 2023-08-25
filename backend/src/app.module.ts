import { Module } from '@nestjs/common';
import { ShoesModule } from './shoes/shoes.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [ShoesModule, UsersModule],
  controllers: [ ],
  providers: [ ],
})
export class AppModule { }
