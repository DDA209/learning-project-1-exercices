import { Component } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'exercice8';
  constructor(private productService: ProductService) {}

  onClickChangeState(status: string) {
    this.productService.changeAllProductsStatus(status);
  }
}