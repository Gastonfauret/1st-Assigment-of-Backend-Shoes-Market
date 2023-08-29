import { Injectable } from '@nestjs/common';
import { ShoesInterface } from './shoes.interface';
export const BASEURL = 'http://localhost:3150';

@Injectable()
export class ShoesService {
  async getShoes(): Promise<ShoesInterface[]> {
    try {
      const res = await fetch(`${BASEURL}/shoes`);
      const parsed = await res.json();
      return parsed;
    } catch (error) {
      throw new Error('Request error ' + error);
    }
  }

  async getShoe(id: number): Promise<ShoesInterface> {
    try {
      const res = await fetch(`${BASEURL}/shoes/${id}`);
      const parsed = await res.json();
      return parsed;
    } catch (error) {
      throw new Error('Request error ' + error);
    }
  }

  async create(
    marca: string,
    modelo: string,
    precio: number,
    talle: string,
    imagen: string,
  ) {
    const newShoe = {
      marca: marca,
      modelo: modelo,
      precio: precio,
      talle: talle,
      imagen: imagen,
    };
    fetch(`${BASEURL}/shoes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newShoe),
    });
    return newShoe;
  }
}
