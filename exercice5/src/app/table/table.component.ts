import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from '../interfaces/car';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() cars!: Car[];
  @Input() cardId!: number;
  @Output() newCarSelectedEmitter = new EventEmitter(); // correction

  // carId!: number;

  constructor() {}

  ngOnInit(): void {}

  receiveCarId(cardId: string) {
    console.log(' +cardId >>>', +cardId);
    this.newCarSelectedEmitter.emit(+cardId); // correction
  }
}
