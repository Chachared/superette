import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css'],
})
export class ProductsTableComponent implements OnInit {
  products!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.products;
  }

  onClickBtnStatus(arrayIndex: number) {
    this.productService
      .updateStatus(this.products[arrayIndex].id)
      .then((product: Product) => {
        this.products[arrayIndex] = product;
      });
  }

  onClickUpdateAllStatus(newStatus: boolean) {
    this.productService
      .updateAllStatus(newStatus)
      .then((products: Product[]) => {
        this.products = products;
      })
      .catch(() => {});
  }

  onClickBtnDelete(arrayIndex: number) {
    this.productService
      .deleteProduct(this.products[arrayIndex].id)
      .then(() => {})
      .catch(() => {});
  }
}
