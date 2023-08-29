import { Injectable } from '@nestjs/common';
import { BASEURL } from 'src/shoes/shoes.service';
import { ClothesInterface } from './clothes.interface';

@Injectable()
export class ClothesService {
    async getClothes(): Promise<ClothesInterface[]> {
        try {
            const res = await fetch(`${BASEURL}/clothes`);
            return await res.json();
        } catch (error) {
            throw new Error('Request error ' + error);
        }
    }

    async getClothe(id: number): Promise<ClothesInterface> {
        try {
            const res = await fetch(`${BASEURL}/clothes/${id}`);
            return await res.json();
        } catch (error) {
            throw new Error('Request error ' + error);
        }
    }

    //devolver tambien id.
    //mostrar mensaje de respuesta.
    async create(
        marca: string,
        modelo: string,
        precio: string,
        talle: string,
        imagen: string,
      ) {
        const newClothe = {
          marca: marca,
          modelo: modelo,
          precio: precio,
          talle: talle,
          imagen: imagen,
        };
        const a = await fetch(`${BASEURL}/clothes`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newClothe),
        });
        return a;
      }
}
