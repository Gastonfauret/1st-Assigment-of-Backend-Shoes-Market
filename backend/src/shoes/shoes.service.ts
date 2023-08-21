import { Injectable } from '@nestjs/common';
import { ShoesInterface } from './shoes.interface';
const shoesURL = 'http://localhost:3150';

@Injectable()
export class ShoesService {
  async getShoes(): Promise<ShoesInterface[]> {
    try {
      const res = await fetch(`${shoesURL}/shoes`);
      const parsed = await res.json();
      return parsed;
    } catch (error) {
      throw new Error('Request error ' + error);
    }
  }

  async getShoe(id: number): Promise<ShoesInterface> {
    try {
      const res = await fetch(`${shoesURL}/shoes/${id}`);
      const parsed = await res.json();
      return parsed;
    } catch (error) {
      throw new Error('Request error ' + error);
    }
  }
}
