import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ShoesService } from './shoes.service';
import { ShoesDTO } from './dto/shoes.dto';

@Controller('shoes')
export class ShoesController {
  constructor(private shoesService: ShoesService) {}

  @Get()
  getShoes() {
    return this.shoesService.getShoes();
  }

  @Get(':id')
  getShoe(@Param('id') id: number) {
    return this.shoesService.getShoe(id);
  }

  @Post()
  create(@Body() shoe: ShoesDTO) {
    return this.shoesService.create(
      shoe.marca,
      shoe.modelo,
      shoe.precio,
      shoe.talle,
      shoe.imagen,
    );
  }
}
