import { Component, Input } from '@angular/core';
import { Animal } from './interfaces/animal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'exercice4';
  animals: Animal[] = [
    {
      name: 'Chien',
      picture:
        'https://img.freepik.com/free-vector/cute-dog-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat_138676-4474.jpg',
      cry: 'aboiement',
    },
    {
      name: 'Chat',
      picture:
        'https://img.freepik.com/free-vector/cute-cat-playing-yarn-ball-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3568.jpg',
      cry: 'miaulement',
    },
    {
      name: 'Hamster',
      picture:
        'https://img.freepik.com/free-vector/cute-hamster-holding-cheek-cartoon-illustration_138676-2773.jpg',
      cry: 'des trucs chou',
    },
    {
      name: 'Ours',
      picture:
        'https://img.freepik.com/free-vector/cute-teddy-bear-waving-hand-cartoon-icon-illustration_138676-2714.jpg',
      cry: 'grondement',
    },
    {
      name: 'Zèbre',
      picture:
        'https://img.freepik.com/free-vector/cute-zebra-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3465.jpg',
      cry: 'hennissement',
    },
    {
      name: 'Manchot',
      picture:
        'https://img.freepik.com/free-vector/cute-happy-penguin-cartoon-icon-illustration-animal-nature-icon-concept-isolated-flat-cartoon-style_138676-2095.jpg',
      cry: 'genre de couinement',
    },
    {
      name: 'Koala',
      picture:
        'https://img.freepik.com/free-vector/cute-koala-sleeping-tree-cartoon-animal-nature-icon-concept-isolated-flat-cartoon-style_138676-2366.jpg',
      cry: "n'a pas",
    },
    {
      name: 'Licorne',
      picture:
        'https://img.freepik.com/free-vector/cute-unicorn-bite-love-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4091.jpg',
      cry: 'wypilee',
    },
  ];
}
