import { Injectable } from '@angular/core';
import { Car } from '../interfaces/car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  cars: Car[];

  constructor() {
    const cars: Array<[string, string]> = [
      ['renault', 'megane'],
      ['citroen', 'c5'],
      ['skoda', 'fabia'],
      ['volkswagen', 'golf'],
      ['peugeot', '106'],
      ['trabant', '601'],
      ['mercedes-benz', 'class s'],
    ];

    this.cars = cars.map((car) => {
      return {
        brand: car[0],
        model: car[1],
        picture: car[0] + car[1],
        state: Math.random() < 0.5 ? 'Pas louée' : 'Louée',
      };
    });
  }

  switchCarState(index: number, state: string) {
    this.cars[index].state = state;
  }

  switchAllCarState(state: string) {
    this.cars.forEach((car) => {
      car.state = state;
    });
  }
}
