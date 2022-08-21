import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  cars: Car[];
  @Input() linesCount!: number;
  @Input() lastLineElementsCount!: number;

  linesCutter!: Array<undefined>;

  constructor(private carService: CarService) {
    this.cars = this.carService.cars;
  }

  ngOnInit(): void {
    this.linesCutter = Array(this.linesCount);
  }
}
