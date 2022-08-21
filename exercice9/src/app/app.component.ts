import { Component } from '@angular/core';
import { Car } from './interfaces/car';
import { CarService } from './service/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'exercice9';
  cars: Car[];
  linesCount: number;
  lastLineElementsCount: number;

  constructor(private carService: CarService) {
    this.cars = this.carService.cars;

    this.linesCount = Math.ceil(this.cars.length / 3);
    const lastLineElementsCount = this.cars.length % 3;
    this.lastLineElementsCount =
      lastLineElementsCount === 0 ? 3 : lastLineElementsCount;
    console.log(
      this.linesCount + ' lines of cars',
      this.cars,
      'last line have ' + this.lastLineElementsCount + ' elements'
    );
  }

  onClickSwitchAllStates(state: string) {
    this.carService.switchAllCarState(state);
  }
}
