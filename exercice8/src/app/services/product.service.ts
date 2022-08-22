import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Array<any> = [];

  constructor() {
    const lorem =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore distinctio minima animi rem perferendis, tempora expedita alias optio magnam. Voluptate qui ipsam nostrum illum sed optio animi blanditiis quis voluptates.'.split(
        ' '
      );
    for (let i = 1; i <= 10; i++) {
      let newLorem = lorem.slice(
        Math.ceil(Math.random() * (lorem.length - 2 * 20))
      );
      this.products.push({
        idCode: Math.ceil(Math.random() * 100000000 + 300000000),
        name: 'product' + i,
        status: 'en stock',
        description: lorem,
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
