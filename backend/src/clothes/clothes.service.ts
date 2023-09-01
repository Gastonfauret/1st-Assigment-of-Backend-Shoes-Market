import { Injectable } from '@nestjs/common';
import { BASEURL } from 'src/shoes/shoes.service';
import { ClothesInterface } from './clothes.interface';
import { ClothesDTO } from './dto/clothes.dto';

@Injectable()
export class ClothesService {
  async getClothes(): Promise<ClothesInterface[]> {
    try {
      const res = await fetch(`${BASEURL}/clothes`);
      return await res.json();
    } catch (error) {
      throw new Error('Get request error ' + error);
    }
  }

  async getClothe(id: number): Promise<ClothesInterface> {
    try {
      const res = await fetch(`${BASEURL}/clothes/${id}`);
      return await res.json();
    } catch (error) {
      throw new Error('Get by id request error ' + error);
    }
  }

  //Find last id from API.
  async lastId(): Promise<number> {
    const all = await this.getClothes();
    return all[all.length - 1].id;
  }

  //mostrar mensaje de respuesta.
  async create(
    clothe: ClothesDTO
  ): Promise<ClothesInterface> {
    const { marca, modelo, precio, talle, imagen } = clothe;
    const newClothe = {
      id: (await this.lastId()) + 1,
      marca: marca,
      modelo: modelo,
      precio: precio,
      talle: talle,
      imagen: imagen,
    };
    try {
      await fetch(`${BASEURL}/clothes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newClothe),
      });
    } catch (error) {
      throw new Error('Post request error' + error);
    }
    return newClothe;
  }

  async delete(id: number) {
    const deleted = await this.getClothe(id);
    try {
      await fetch(`${BASEURL}/clothes/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      throw new Error('Delete request error' + error);
    }
    return deleted;
  }

  async update(id: number, clothe: ClothesDTO) {
    const { marca, modelo, precio, talle, imagen } = clothe;
    const updated = {
      id: id,
      marca: marca,
      modelo: modelo,
      precio: precio,
      talle: talle,
      imagen: imagen,
    };
    try {
      await fetch(`${BASEURL}/clothes/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated),
      });
    } catch (error) {
      throw new Error('Put request error' + error);
    }
    return updated;
  }
}
