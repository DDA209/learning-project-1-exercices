import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/car';

@Component({
  selector: '[app-column]',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css'],
})
export class ColumnComponent implements OnInit {
  @Input() car!: Car;
  @Input() lineIndex!: number;
  @Input() carLineIndex!: number;
  carIndex!: number;
  constructor() {}

  ngOnInit(): void {
    this.carIndex = this.lineIndex * 3 + this.carLineIndex;
  }
}
