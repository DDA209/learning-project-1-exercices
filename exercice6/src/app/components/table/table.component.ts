import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() users: any;
  constructor() {}

  ngOnInit(): void {}

  setColor(index: number) {
    if (index % 2 === 0) {
      return 'white';
    } else {
      return 'lightBlue';
    }
  }
}
