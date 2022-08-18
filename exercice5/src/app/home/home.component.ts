import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../interfaces/car';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input() cars!: Car[];
  // @Input() cardId!: number;
  carId!: number;

  car: Car; // correction

  constructor() {
    this.car = {
      // correction
      brand: 'Chargement...', // correction
      model: 'Chargement...', // correction
      description: 'Chargement...',
    }; // correction
  }

  ngOnInit(): void {}

  receiveCarId(carId: number) {
    this.car = this.cars[carId];
    console.log(' this.carId >>>', this.carId);
  }
}
