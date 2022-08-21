import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css'],
})
export class HomeViewComponent implements OnInit {
  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  onClickChangeState(status: string) {
    this.productService.changeAllProductsStatus(status);
  }
}
