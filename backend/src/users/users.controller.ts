import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersInterface } from './users.interface';
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
}
