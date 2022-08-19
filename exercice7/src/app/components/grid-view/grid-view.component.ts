import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css'],
})
export class GridViewComponent implements OnInit {
  rowCount: number = 5;
  colCount: number = 4;

  grid: any = [];

  constructor() {
    for (let i = 0; i < this.rowCount; i++) {
      this.grid.push([]);

      for (let j = 0; j < this.colCount; j++) {
        this.grid[i].push(`${i}${j}`);
      }
    }
    console.log('grid.length', this.grid.length);
  }

  ngOnInit(): void {}
}
