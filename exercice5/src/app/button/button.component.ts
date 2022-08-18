import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() buttonText!: string;

  constructor() {}

  ngOnInit(): void {}

  @Output() buttonEmitEvent = new EventEmitter();

  onClickButton() {
    this.buttonEmitEvent.emit();
  }
}
