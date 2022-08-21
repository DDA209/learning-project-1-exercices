import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Car } from 'src/app/interfaces/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: '[app-card]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, OnChanges {
  @Input() brand!: string;
  @Input() model!: string;
  @Input() state!: string;
  @Input() picture!: string;
  @Input() carIndex!: number;
  carStates: [string, string] = ['Louée', 'Pas louée'];
  nextState!: string;

  constructor(private carService: CarService) {
    // this.car = this.carService.cars[this.carIndex];
  }

  ngOnChanges(): void {
    console.log('CHANGE');
    console.log(' this.nextState >>>', this.nextState);
    this.nextState =
      this.carService.cars[this.carIndex].state === this.carStates[1]
        ? this.carStates[0]
        : this.carStates[1];
  }

  ngOnInit(): void {}

  onClickChange() {
    this.carService.switchCarState(this.carIndex, this.nextState);
  }
}
