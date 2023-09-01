import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  UsePipes,
  Res,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { Response } from 'express';
import { ClothesService } from './clothes.service';
import { ClothesDTO } from './dto/clothes.dto';
import { ValidationPipe } from '@nestjs/common/pipes';
import { ClothesInterface } from './clothes.interface';

@Controller('clothes')
export class ClothesController {
  constructor(private readonly clothesService: ClothesService) {}

  @Get()
  async getClothes(
    @Res() res: Response,
  ): Promise<Response<ClothesInterface[]>> {
    try {
      const serviceResponse = await this.clothesService.getClothes();
      return res.status(HttpStatus.OK).send(serviceResponse);
    } catch (error) {
      throw new NotFoundException('Data not found' + error);
    }
  }

  @Get(':id')
  async getClothe(@Res() res: Response, @Param('id') id: number) {
    try {
      const serviceResponse = await this.clothesService.getClothe(id);
      return res.status(HttpStatus.OK).send(serviceResponse);
    } catch (error) {
      throw new NotFoundException('Data not found' + error);
    }
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Res() res: Response, @Body() clothe: ClothesDTO) {
    try {
      const serviceResponse = await this.clothesService.create(clothe);
      return res.status(HttpStatus.CREATED).json(serviceResponse);
    } catch (error) {
      throw new NotFoundException('Data not found' + error);
    }
  }

  @Delete(':id')
  async delete(
    @Res() res: Response,
    @Param('id') id: number,
  ): Promise<Response<ClothesInterface>> {
    try {
      const serviceResponse = await this.clothesService.delete(id);
      if (Object.keys(serviceResponse).length) {
        return res
          .status(HttpStatus.OK)
          .send({ message: 'File has been deleted', serviceResponse });
      } else {
        return res.status(HttpStatus.NOT_FOUND).send({ message: 'File not exist'})
      }
    } catch (error) {
      throw new NotFoundException('Data not found' + error);
    }
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() clothe: ClothesDTO) {
    return this.clothesService.update(id, clothe);
  }
}
