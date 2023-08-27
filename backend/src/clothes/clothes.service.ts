import { Injectable } from '@nestjs/common';
import { BASEURL } from 'src/shoes/shoes.service';
import { ClothesInterface } from './clothes.interface';

@Injectable()
export class ClothesService {
    async getClothes(): Promise<ClothesInterface[]> {
        try {
            const res = await fetch(`${BASEURL}/clothes`);
            const parsed = await res.json();
            return parsed;
        } catch (error) {
            throw new Error('Request error ' + error);
        }
    }

    async getClothe(id: number): Promise<ClothesInterface> {
        try {
            const res = await fetch(`${BASEURL}/clothes/${id}`);
            const parsed = await res.json();
            return parsed;
        } catch (error) {
            throw new Error('Request error ' + error);
        }
    }
}
