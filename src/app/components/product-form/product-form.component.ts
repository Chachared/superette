import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;
  product!: Product;

  @Input() btnLabel!: string;
  @Input() productToEdit!: Product;
  @Output() formSubmitted: EventEmitter<Product>;

  constructor(private fb: FormBuilder) {
    this.formSubmitted = new EventEmitter<Product>();
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmitProductForm() {
    this.formSubmitted.emit(this.product);
  }

  private initForm(): void {
    this.product = this.productToEdit
      ? this.productToEdit
      : new Product(0, '', false);
    this.productForm = this.fb.group({
      name: new FormControl(null),
      status: new FormControl(null),
    });
  }
}
