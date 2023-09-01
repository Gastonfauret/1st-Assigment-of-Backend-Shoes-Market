import { IsString, IsNotEmpty, IsInt } from 'class-validator';
import { Expose } from 'class-transformer';

export class UsersDTO {
  @IsString()
  @IsNotEmpty()
  @Expose()
  name: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  lastname: string;

  @IsInt()
  @IsNotEmpty()
  @Expose()
  age: number;

  @IsString()
  @IsNotEmpty()
  @Expose()
  image: string;
}
