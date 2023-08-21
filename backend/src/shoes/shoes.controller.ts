import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express'
import { join } from 'path'
import { ShoesService } from './shoes.service';

@Controller('shoes')
export class ShoesController {
    constructor(private shoesService: ShoesService) {}

    @Get()
    getShoes() {
        return this.shoesService.getShoes();
    }
}
