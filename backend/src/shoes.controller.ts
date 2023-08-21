import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express'
import { join } from 'path'

@Controller('shoes')
export class ShoesController {
    @Get()
    getShoes(@Res() res: Response) {
        const shoes = join(__dirname, '../data/shoes.json')
        res.sendFile(shoes)
    }
}
