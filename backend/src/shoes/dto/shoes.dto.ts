import { IsString, IsNotEmpty, IsInt } from 'class-validator';
import { Expose } from 'class-transformer';

export class ShoesDTO {
  @IsString()
  @IsNotEmpty()
  @Expose()
  marca: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  modelo: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  precio: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  talle: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  imagen: string;
}
