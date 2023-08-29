import { Controller, Get, HttpStatus, Param, Post, Res, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersInterface } from './users.interface';
import { UsersDTO } from './dto/users.dto';
// import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): Promise<UsersInterface[]> {
    return this.usersService.getUsers();
  }

  @Get(':id') 
  getUser(@Param('id') id: number):Promise<UsersInterface> {
    return this.usersService.getUser(id);
  }

  @Post() 
  create(@Body() user: UsersDTO) {
    return this.usersService.create(user.age, user.name);
  }
}
