import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: '[app-line]',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css'],
})
export class LineComponent implements OnInit {
  @Input() product: any;
  @Input() index!: number;

  nextStatus!: [string, string];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnChanges(): void {
    this.nextStatus =
      this.product.status === 'en stock'
        ? ['manquant', 'Sortir']
        : ['en stock', 'Rentrer'];
    console.log(' this.product.status >>>', this.product.status);
  }

  ngOnInit(): void {}

  onClickChangeStatus(index: number) {
    this.productService.changeProductStatus(index, this.nextStatus[0]);
  }

  onClickShowDetail(index: number): void {
    console.log('Clic detail');
    this.router.navigate([`/product/${index}`]);
  }
}
