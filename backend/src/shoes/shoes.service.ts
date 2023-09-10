import { Injectable } from '@nestjs/common';
import { ShoesInterface } from './shoes.interface';
import { CreateShoesDTO, UpdateShoesDTO } from './dto/shoes.dto';
export const BASEURL = 'http://localhost:3150';

@Injectable()
export class ShoesService {
  async getShoes(): Promise<ShoesInterface[]> {
    try {
      const res = await fetch(`${BASEURL}/shoes`);
      return await res.json();
    } catch (error) {
      throw new Error('Get request error');
    }
  }

  async getShoe(id: number): Promise<ShoesInterface> {
    try {
      const res = await fetch(`${BASEURL}/shoes/${id}`);
      return await res.json();
    } catch (error) {
      throw new Error('Get by id request error ');
    }
  }

  //Find last id from API.
  async lastId(): Promise<number> {
    const all = await this.getShoes();
    return all[all.length - 1].id;
  }

  //mostrar mensaje de respuesta.
  async create(shoe: CreateShoesDTO): Promise<ShoesInterface> {
    const { marca, modelo, precio, talle, imagen } = shoe;
    const newShoe = {
      id: (await this.lastId()) + 1,
      marca: marca,
      modelo: modelo,
      precio: precio,
      talle: talle,
      imagen: imagen,
    };
    try {
      await fetch(`${BASEURL}/shoes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newShoe),
      });
    } catch (error) {
      throw new Error('Post request error' + error);
    }
    return newShoe;
  }

  async delete(id: number): Promise<ShoesInterface> {
    const deleted = await this.getShoe(id);
    try {
      await fetch(`${BASEURL}/shoes/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      throw new Error('Delete request error' + error);
    }
    return deleted;
  }

  async update(id: number, shoe: CreateShoesDTO): Promise<ShoesInterface> {
    const { marca, modelo, precio, talle, imagen } = shoe;
    const updated = {
      id: id,
      marca: marca,
      modelo: modelo,
      precio: precio,
      talle: talle,
      imagen: imagen,
    };
    try {
      const found = (await this.getShoes()).find(
        (item) => item.id === Number(id),
      );
      if (found) {
        await fetch(`${BASEURL}/shoes/${id}`, {
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

  async partialUpdate(
    id: number,
    shoe: UpdateShoesDTO,
  ): Promise<UpdateShoesDTO> {
    const found = (await this.getShoes()).find(
      (item) => item.id === Number(id),
    );
    const { marca, modelo, precio, talle, imagen } = shoe;
    const updated = {
      id: id,
      marca: marca ? marca : found.marca,
      modelo: modelo ? modelo : found.modelo,
      precio: precio ? precio : found.precio,
      talle: talle ? talle : found.talle,
      imagen: imagen ? imagen : found.imagen,
    };
    try {
      if (found) {
        await fetch(`${BASEURL}/clothes/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updated),
        });
        return updated;
      }
    } catch (error) {
      throw new Error('Patch request error' + error);
    }
  }
}
