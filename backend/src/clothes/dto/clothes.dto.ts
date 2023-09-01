import { Transform } from 'class-transformer';
import { IsString, IsInt } from 'class-validator';

export class ClothesDTO {
    @IsString()
    marca: string;

    @IsString()
    modelo: string;

    @IsString()
    precio: string;

    @IsString()
    talle: string;

    @IsString()
    imagen: string;
}