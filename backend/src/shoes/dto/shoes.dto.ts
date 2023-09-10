import { IsString, IsNotEmpty, IsPositive, IsUrl } from 'class-validator';
import { Expose } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';

export class CreateShoesDTO {
  @IsString()
  @IsNotEmpty()
  @Expose()
  readonly marca: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  readonly modelo: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  readonly precio: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  readonly talle: string;

  @IsUrl()
  @IsNotEmpty()
  @Expose()
  readonly imagen: string;
}

export class UpdateShoesDTO extends PartialType(CreateShoesDTO) {}
