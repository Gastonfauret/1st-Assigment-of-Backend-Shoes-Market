import { UsersService } from './users.service';
import { UsersInterface } from './users.interface';
import { CreateUsersDTO, UpdateUsersDTO } from './dto/users.dto';
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
  Patch,
} from '@nestjs/common';
import { Response } from 'express';
import { ValidationPipe } from '@nestjs/common/pipes';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async get(@Res() res: Response): Promise<Response<UsersInterface[]>> {
    try {
      const serviceResponse = await this.usersService.getUsers();
      return res.status(HttpStatus.OK).send(serviceResponse);
    } catch (error) {
      throw new NotFoundException('Path not found');
    }
  }

  @Get(':id')
  async getById(@Res() res: Response, @Param('id', ParseIntPipe) id: number) {
    try {
      const serviceResponse = await this.usersService.getUser(id);
      if (Object.keys(serviceResponse).length && id > 0) {
        return res
          .status(HttpStatus.OK)
          .send({ message: `Request by id: ${id}`, data: serviceResponse });
      } else {
        return res
          .status(HttpStatus.NOT_FOUND)
          .send({
            message: 'Non-existent or not allowed id',
            errorCode: HttpStatus.NOT_FOUND,
          });
      }
    } catch (error) {
      throw new NotFoundException('Non-existent id');
    }
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Res() res: Response, @Body() user: CreateUsersDTO) {
    try {
      const serviceResponse = await this.usersService.create(user);
      return res
        .status(HttpStatus.CREATED)
        .json({ message: 'Object has been created', data: serviceResponse });
    } catch (error) {
      throw new BadRequestException('Data not allowed' + error);
    }
  }

  @Delete(':id')
  async delete(
    @Res() res: Response,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Response<UsersInterface>> {
    try {
      const serviceResponse = await this.usersService.delete(id);
      if (Object.keys(serviceResponse).length) {
        return res
          .status(HttpStatus.OK)
          .send({
            message: `File has been deleted: Id ${id}`,
            code: HttpStatus.OK,
          });
      } else {
        return res
          .status(HttpStatus.NOT_FOUND)
          .send({
            message: 'Non-existent id',
            errorCode: HttpStatus.NOT_FOUND,
          });
      }
    } catch (error) {
      throw new NotFoundException('Data not found' + error);
    }
  }

  @Put(':id')
  async update(
    @Res() res: Response,
    @Param('id', ParseIntPipe) id: number,
    @Body() user: CreateUsersDTO,
  ) {
    try {
      const serviceResponse = await this.usersService.update(id, user);
      if(Object.keys(serviceResponse).length) {
        console.log("Hola")
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
    @Body() user: UpdateUsersDTO,
  ) {
    try {
      const serviceResponse = await this.usersService.partialUpdate(
        id,
        user,
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
