import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  product!: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']; //retourne une string
    this.productService
      .getProductById(+id) // ca le transforme en number (evite le parsInt)
      .then((product: Product) => {
        this.product = product;
        console.log(this.product);
      });
  }

  onSubmitEditProduct(editedProduct: Product) {
    this.productService.editProduct(editedProduct).then(() => {
      console.log(editedProduct);
      this.router.navigateByUrl('/products');
    });
  }
}
