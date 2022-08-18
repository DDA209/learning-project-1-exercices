import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

let carId: string;
@Component({
  selector: '[app-line]',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css'],
})
export class LineComponent implements OnInit {
  @Input() carId!: string;
  @Input() carBrand!: string;
  @Input() carModel!: string;
  @Output() EmitCarId = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  displayCarDescription(carId: string) {
    console.log('CLICK Car', carId);
    this.EmitCarId.emit(carId);
  }
}
