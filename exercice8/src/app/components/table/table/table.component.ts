import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  products: Array<any> = [];

  constructor(private productService: ProductService) {
    this.products = productService.products;
    console.log(' this.products >>>', this.products);
  }

  ngOnInit(): void {}
}
