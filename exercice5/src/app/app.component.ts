import { Component } from '@angular/core';
import { Car } from './interfaces/car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'exercice5';
  cars: Car[] = [
    {
      brand: 'Trabant',
      model: '601',
      description:
        'La Trabant 601 est une automobile fabriquée entre 1964 et 1990 par l’entreprise d’État est-allemande VEB Sachsenring Automobilwerk Zwickau (AWZ). ',
    },
    {
      brand: 'Maybach',
      model: 'classe S',
      description:
        "La Mercedes-Maybach Classe S redéfinit le luxe ultime. Des matériaux de la plus haute qualité, une excellente finition, un confort exceptionnel ainsi que des technologies innovantes et votre assistant personnel sous la forme du système d'infodivertissement intelligent",
    },
    {
      brand: 'Prototype',
      model: 'la Jamais contente',
      description:
        'La Jamais contente est le premier véhicule automobile à franchir le cap des 100 km/h2. Cette voiture électrique, en forme de torpille sur roues, établit ce record le 29 avril 18991,3 à Achères.',
    },
  ];
}
