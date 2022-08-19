import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Array<any> = [];

  constructor() {
    for (let i = 1; i <= 10; i++) {
      this.products.push({
        idCode: Math.ceil(Math.random() * 100000000),
        name: 'product' + i,
        status: 'en stock',
      });
    }
  }

  changeAllProductsStatus(status: string) {
    this.products.forEach((product) => {
      product.status = status;
    });
  }

  changeProductStatus(index: number, status: string) {
    this.products[index].status = status;
  }
}
