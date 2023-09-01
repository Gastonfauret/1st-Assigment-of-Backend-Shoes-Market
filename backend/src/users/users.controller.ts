import { UsersService } from './users.service';
import { UsersInterface } from './users.interface';
import { UsersDTO } from './dto/users.dto';
import { ShoesInterface } from 'src/shoes/shoes.interface';
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
  BadRequestException
} from '@nestjs/common';
import { Response } from 'express';
import { ValidationPipe } from '@nestjs/common/pipes';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async get(
    @Res() res: Response,
  ): Promise<Response<UsersInterface[]>> {
    try {
      const serviceResponse = await this.usersService.getUsers();
      return res.status(HttpStatus.OK).send(serviceResponse);
    } catch (error) {
      throw new NotFoundException('Path not found');
    }
  }

  @Get(':id')
  async getById(@Res() res: Response, @Param('id') id: number) {
    try {
      const serviceResponse = await this.usersService.getUser(id);
      if(Object.keys(serviceResponse).length && id > 0) {
        return res.status(HttpStatus.OK).send(serviceResponse);
      } else {
        return res.status(HttpStatus.NOT_FOUND).send({message: 'Non-existent or not allowed id', errorCode: HttpStatus.NOT_FOUND})
      }
    } catch (error) {
      throw new NotFoundException('Non-existent id');
    }
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Res() res: Response, @Body() user: UsersDTO) {
    try {
      const serviceResponse = await this.usersService.create(user);
      return res.status(HttpStatus.CREATED).json(serviceResponse);
    } catch (error) {
      throw new BadRequestException('Data not allowed' + error);
    }
  }

  @Delete(':id')
  async delete(
    @Res() res: Response,
    @Param('id') id: number,
  ): Promise<Response<UsersInterface>> {
    try {
      const serviceResponse = await this.usersService.delete(id);
      if (Object.keys(serviceResponse).length) {
        return res
          .status(HttpStatus.OK)
          .send({ message: 'File has been deleted', serviceResponse });
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
    @Param('id') id: number,
    @Body() user: UsersDTO,
  ) {
    try {
      const serviceResponse = await this.usersService.update(id, user);
      if(Object.keys(serviceResponse).length && id > 0) {
        return res.status(HttpStatus.ACCEPTED).send({message: 'File has been updated', serviceResponse})
      } else {
        return res.status(HttpStatus.NOT_FOUND).send({ message: 'File not exist', errorCode: HttpStatus.NOT_FOUND })
      }
    } catch (error) {
      throw new BadRequestException('Data not found /' + error);
    }
  }
}
