import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  count = 0;

  constructor() {}

  ngOnInit(): void {}

  onClickAddOne() {
    this.count++;
  }

  onClickRaz() {
    this.count = 0;
  }
}
