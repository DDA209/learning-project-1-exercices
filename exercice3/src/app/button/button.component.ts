import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Output() buttonEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClickAddOne() {
    this.buttonEmitter.emit();
  }
}
