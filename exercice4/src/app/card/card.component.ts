import { Component, Input, OnInit } from '@angular/core';
import { Animal } from '../interfaces/animal';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() animalName!: string;
  @Input() animalPicture!: string;
  @Input() animalCry!: string;

  displayAlert: boolean = false;

  // console.log('CARD animal >>>', animalName);

  constructor() {}

  ngOnInit(): void {}

  onButtonClick() {
    alert(`Son cri est : ${this.animalCry}`);
  }
}
