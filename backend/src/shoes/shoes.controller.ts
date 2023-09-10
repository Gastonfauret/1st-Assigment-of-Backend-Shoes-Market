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
  ParseIntPipe,
  Patch
} from '@nestjs/common';
import { ShoesService } from './shoes.service';
import { CreateShoesDTO, UpdateShoesDTO } from './dto/shoes.dto';
import { Response } from 'express';
import { ValidationPipe } from '@nestjs/common/pipes';
import { ShoesInterface } from './shoes.interface';

@Controller('shoes')
export class ShoesController {
  constructor(private shoesService: ShoesService) {}

  @Get()
  async get(
    @Res() res: Response,
  ): Promise<Response<ShoesInterface[]>> {
    try {
      const serviceResponse = await this.shoesService.getShoes();
      return res.status(HttpStatus.OK).send(serviceResponse);
    } catch (error) {
      throw new NotFoundException('Path not found');
    }
  }

  @Get(':id')
  async getById(@Res() res: Response, @Param('id', ParseIntPipe) id: number) {
    try {
      const serviceResponse = await this.shoesService.getShoe(id);
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
  async create(@Res() res: Response, @Body() shoe: CreateShoesDTO) {
    try {
      const serviceResponse = await this.shoesService.create(shoe);
      return res.status(HttpStatus.CREATED).json({message: 'Object has been created', data: serviceResponse});
    } catch (error) {
      throw new BadRequestException('Data not allowed' + error);
    }
  }

  @Delete(':id')
  async delete(
    @Res() res: Response,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Response<ShoesInterface>> {
    try {
      const serviceResponse = await this.shoesService.delete(id);
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
    @Body() shoe: CreateShoesDTO,
  ) {
    try {
      const serviceResponse = await this.shoesService.update(id, shoe);
      if(Object.keys(serviceResponse).length) {
        return res
        .status(HttpStatus.ACCEPTED)
        .send({ message: 'File has been updated', data: serviceResponse });
      }
    } catch (error) {
      throw new BadRequestException({
        message: 'Id non-existent',
        errorCode: HttpStatus.BAD_REQUEST,
      });
    }
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async Partialupdate(
    @Res() res: Response,
    @Param('id', ParseIntPipe) id: number,
    @Body() shoe: UpdateShoesDTO,
  ) {
    try {
      const serviceResponse = await this.shoesService.partialUpdate(
        id,
        shoe,
      );
      return res
        .status(HttpStatus.ACCEPTED)
        .send({ message: 'File has been updated', data: serviceResponse });
    } catch (error) {
      throw new BadRequestException({
        message: 'Id non-existent',
        errorCode: HttpStatus.BAD_REQUEST,
      });
    }
  }
}
