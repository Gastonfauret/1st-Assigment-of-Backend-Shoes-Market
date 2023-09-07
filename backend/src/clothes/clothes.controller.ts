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
  BadRequestException,
  ParseIntPipe
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
  async get(
    @Res() res: Response,
  ): Promise<Response<ClothesInterface[]>> {
    try {
      const serviceResponse = await this.clothesService.getClothes();
      return res.status(HttpStatus.OK).send(serviceResponse);
    } catch (error) {
      throw new NotFoundException('Path not found');
    }
  }

  @Get(':id')
  async getById(@Res() res: Response, @Param('id', ParseIntPipe) id: number) {
    try {
      const serviceResponse = await this.clothesService.getClothe(id);
      if(Object.keys(serviceResponse).length && id > 0) {
        return res.status(HttpStatus.OK).send({message: `Request by id: ${id}`, data: serviceResponse});
      } else {
        return res.status(HttpStatus.NOT_FOUND).send({message: 'Non-existent or not allowed id', errorCode: HttpStatus.NOT_FOUND})
      }
    } catch (error) {
      throw new NotFoundException('Non-existent id');
    }
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Res() res: Response, @Body() clothe: ClothesDTO) {
    try {
      const serviceResponse = await this.clothesService.create(clothe);
      return res.status(HttpStatus.CREATED).json({message: 'Object has been created', data: serviceResponse});
    } catch (error) {
      throw new BadRequestException('Data not allowed' + error);
    }
  }

  @Delete(':id')
  async delete(
    @Res() res: Response,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Response<ClothesInterface>> {
    try {
      const serviceResponse = await this.clothesService.delete(id);
      if (Object.keys(serviceResponse).length) {
        return res
          .status(HttpStatus.OK)
          .send({ message: `File has been deleted: Id ${id}`, code: HttpStatus.OK });
      } else {
        return res
          .status(HttpStatus.NOT_FOUND)
          .send({ message: 'Non-existent id', errorCode: HttpStatus.NOT_FOUND });
      }
    } catch (error) {
      throw new NotFoundException('Data not found' + error);
    }
  }

  @Put(':id')
  async update(
    @Res() res: Response,
    @Param('id', ParseIntPipe) id: number,
    @Body() clothe: ClothesDTO,
  ) {
    try {
      const serviceResponse = await this.clothesService.update(id, clothe);
      if(Object.keys(serviceResponse).length && id > 0) {
        return res.status(HttpStatus.ACCEPTED).send({message: 'File has been updated', data: serviceResponse})
      } else {
        return res.status(HttpStatus.NOT_FOUND).send({ message: 'File not exist', errorCode: HttpStatus.NOT_FOUND })
      }
    } catch (error) {
      throw new BadRequestException('Data not found /' + error);
    }
  }
}
