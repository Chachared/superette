import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product/product.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit {
  product!: Product;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']; //retourne une string
    this.productService
      .getProductById(+id) // ca le transforme en number (evite le parsInt)
      .then((product: Product) => {
        this.product = product;
      });
  }
  onClickBtnDelete() {
    this.productService
      .deleteProduct(this.product.id)
      .then(() => {
        this.router.navigateByUrl('/products');
      })
      .catch(() => {});
  }
}
