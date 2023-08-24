import { Controller, Get, Param } from '@nestjs/common';
import { ShoesService } from './shoes.service';

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
}
