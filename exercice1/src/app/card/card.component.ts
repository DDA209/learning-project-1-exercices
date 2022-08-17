import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  title: String = 'Choisir un titre';
  subtitle: String = "Toute la difficulté d'être percutant et honnête";
  content: String =
    "choisir un titre n'est pas toujours chose aisée. Il faut que son accroche incite à la lecture et reste honnête avec le contenu qu'il présente au lecteur.";

  constructor() {}

  ngOnInit(): void {}
}
