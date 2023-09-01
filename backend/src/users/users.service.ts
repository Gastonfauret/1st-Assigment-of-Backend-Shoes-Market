import { Injectable } from '@nestjs/common';
import { BASEURL } from 'src/shoes/shoes.service';
import { UsersInterface } from './users.interface';
import { UsersDTO } from './dto/users.dto';

@Injectable()
export class UsersService {
    async getUsers(): Promise<UsersInterface[]> {
      try {
        const res = await fetch(`${BASEURL}/users`);
        return await res.json();
      } catch (error) {
        throw new Error('Get request error');
      }
    }
  
    async getUser(id: number): Promise<UsersInterface> {
      try {
        const res = await fetch(`${BASEURL}/users/${id}`);
        return await res.json();
      } catch (error) {
        throw new Error('Get by id request error ');
      }
    }
  
    //Find last id from API.
    async lastId(): Promise<number> {
      const all = await this.getUsers();
      return all[all.length - 1].id;
    }
  
    //mostrar mensaje de respuesta.
    async create(user: UsersDTO): Promise<UsersInterface> {
      const { name, lastname, age, image } = user;
      const newUser = {
        name: name,
        lastname: lastname,
        age: age,
        id: (await this.lastId()) + 1,
        image: image,
      };
      try {
        await fetch(`${BASEURL}/users`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newUser),
        });
      } catch (error) {
        throw new Error('Post request error' + error);
      }
      return newUser;
    }
  
    async delete(id: number): Promise<UsersInterface> {
      const deleted = await this.getUser(id);
      try {
        await fetch(`${BASEURL}/users/${id}`, {
          method: 'DELETE',
        });
      } catch (error) {
        throw new Error('Delete request error' + error);
      }
      return deleted;
    }
  
    async update(id: number, user: UsersDTO): Promise<UsersInterface> {
      const { name, lastname, age, image } = user;
      const updated = {
        name: name,
        lastname: lastname,
        age: age,
        image: image,
        id: id
      };
      try {
        const found = (await this.getUsers()).find((item) => item.id === Number(id));
        if(found) {
          await fetch(`${BASEURL}/users/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updated),
          });
          return updated;
        }
      } catch (error) {
        throw new Error('Put request error' + error);
      }
    }
}
