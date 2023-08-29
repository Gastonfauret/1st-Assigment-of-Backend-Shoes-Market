import { Injectable } from '@nestjs/common';
import { BASEURL } from 'src/shoes/shoes.service';
import { UsersInterface } from './users.interface';

@Injectable()
export class UsersService {
  async getUsers(): Promise<UsersInterface[]> {
    try {
      const res = await fetch(`${BASEURL}/users`);
      const parsed = await res.json();
      return parsed;
    } catch (error) {
      throw new Error('Request error ' + error);
    }
  }

  async getUser(id: number): Promise<UsersInterface> {
    try {
      const res = await fetch(`${BASEURL}/users/${id}`);
      const parsed = await res.json();
      return parsed;
    } catch (error) {
      throw new Error('Request error ' + error);
    }
  }

  async create(age: number, name: string) {
  const newUser = {
      name: name,
      age: age
    }
    fetch(`${BASEURL}/users`, {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(newUser)
    })
    return newUser;
  }
}
