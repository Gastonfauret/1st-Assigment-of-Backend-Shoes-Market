import { IsString, IsNotEmpty, IsInt, IsUrl } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { Expose } from 'class-transformer';

export class CreateUsersDTO {
  @IsString()
  @IsNotEmpty()
  @Expose()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  readonly lastname: string;

  @IsInt()
  @IsNotEmpty()
  @Expose()
  readonly age: number;

  @IsUrl()
  @IsNotEmpty()
  @Expose()
  readonly image: string;
}

export class UpdateUsersDTO extends PartialType(CreateUsersDTO) {}