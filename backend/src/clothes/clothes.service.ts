import { Injectable } from '@nestjs/common';
import { BASEURL } from 'src/shoes/shoes.service';
import { ClothesInterface } from './clothes.interface';
import { CreateClothesDTO, UpdateClothesDTO } from './dto/clothes.dto';

@Injectable()
export class ClothesService {
  async getClothes(): Promise<ClothesInterface[]> {
    try {
      const res = await fetch(`${BASEURL}/clothes`);
      return await res.json();
    } catch (error) {
      throw new Error('Get request error');
    }
  }

  async getClothe(id: number): Promise<ClothesInterface> {
    try {
      const res = await fetch(`${BASEURL}/clothes/${id}`);
      return await res.json();
    } catch (error) {
      throw new Error('Get by id request error ');
    }
  }

  //Find last id from API.
  async lastId(): Promise<number> {
    const all = await this.getClothes();
    return all[all.length - 1].id;
  }

  //mostrar mensaje de respuesta.
  async create(clothe: CreateClothesDTO): Promise<ClothesInterface> {
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

  async delete(id: number): Promise<ClothesInterface> {
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

  async update(
    id: number,
    clothe: CreateClothesDTO,
  ): Promise<ClothesInterface> {
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
      const found = (await this.getClothes()).find(
        (item) => item.id === Number(id),
      );
      if (found) {
        await fetch(`${BASEURL}/clothes/${id}`, {
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
    clothe: UpdateClothesDTO,
  ): Promise<UpdateClothesDTO> {
    const found = (await this.getClothes()).find(
      (item) => item.id === Number(id),
    );
    const { marca, modelo, precio, talle, imagen } = clothe;
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
