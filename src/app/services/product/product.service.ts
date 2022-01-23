import { Injectable } from '@angular/core';
import { Product } from '../../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[];

  constructor() {
    this.products = [];

    for (let i = 0; i < 15; i++) {
      this.products.push(new Product(i, 'Nom' + i, true));
    }
  }

  addProduct(newProduct: Product) {
    return new Promise<void>((res, rej) => {
      if (this.products.length === 0) {
        newProduct.id = 0;
      } else {
        newProduct.id = this.products[this.products.length - 1].id + 1;
      }

      this.products.push(newProduct);
      res();
    });
  }

  editProduct(editedProduct: Product) {
    return new Promise<void>((res, rej) => {
      for (let [index, product] of this.products.entries()) {
        if (product.id === editedProduct.id) {
          this.products[index] = editedProduct;
          res();
          break;
        }
      }
    });
  }

  deleteProduct(productIdToDelete: number): Promise<void> {
    return new Promise<void>((res, rej) => {
      for (let [index, book] of this.products.entries()) {
        if (book.id === productIdToDelete) {
          this.products.splice(index, 1);
          res();
          break;
        }
      }
    });
  }

  getProductById(productId: number): Promise<Product> {
    return new Promise<Product>((res, rej) => {
      for (let product of this.products) {
        if (product.id === productId) {
          res(product);
          break;
        }
      }
    });
  }

  updateStatus(idProduct: number): Promise<Product> {
    return new Promise<Product>((resolve, reject) => {
      for (let [index, product] of this.products.entries()) {
        if (product.id === idProduct) {
          this.products[index].status = !this.products[index].status;
          break;
        }
      }
    });
  }

  updateAllStatus(newStatus: boolean): Promise<Product[]> {
    return new Promise<Product[]>((res, rej) => {
      this.products.forEach((product) => (product.status = newStatus));
      res(this.products);
    });
  }
}
