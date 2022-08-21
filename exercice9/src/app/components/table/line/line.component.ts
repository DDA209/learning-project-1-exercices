import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: '[app-line]',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css'],
})
export class LineComponent implements OnInit {
  cars!: Car[];
  @Input() lineIndex!: number;
  constructor(private carService: CarService) {
    this.cars = carService.cars;
  }

  ngOnInit(): void {
    this.cars = this.cars.slice(this.lineIndex * 3, this.lineIndex * 3 + 3);
    console.log(this.lineIndex, '-', this.cars);
  }
}
