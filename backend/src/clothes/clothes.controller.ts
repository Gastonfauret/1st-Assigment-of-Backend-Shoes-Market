import { Controller, Get, Param } from '@nestjs/common';
import { ClothesService } from './clothes.service';

@Controller('clothes')
export class ClothesController {
    constructor(private readonly clothesService: ClothesService) { }

    @Get()
    getClothes() {
        return this.clothesService.getClothes();
    }

    @Get(':id')
    getClothe(@Param('id') id: number) {
        return this.clothesService.getClothe(id);
    }
}
