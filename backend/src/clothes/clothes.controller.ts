import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ClothesService } from './clothes.service';
import { ClothesDTO } from './dto/clothes.dto';

@Controller('clothes')
export class ClothesController {
  constructor(private readonly clothesService: ClothesService) {}

  @Get()
  getClothes() {
    return this.clothesService.getClothes();
  }

  @Get(':id')
  getClothe(@Param('id') id: number) {
    return this.clothesService.getClothe(id);
  }

  @Post()
  create(@Body() clothe: ClothesDTO) {
    return this.clothesService.create(
      clothe.marca,
      clothe.modelo,
      clothe.precio,
      clothe.talle,
      clothe.imagen,
    );
  }
}
