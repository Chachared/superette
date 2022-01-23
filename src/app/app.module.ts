import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './services/product/product.service';
import { ProductsTableComponent } from './views/products-table/products-table.component';
import { AuthComponent } from './views/auth/auth.component';
import { AuthService } from './services/auth/auth.service';
import { ErrorComponent } from './views/error/error.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewProductComponent } from './views/new-product/new-product.component';
import { EditProductComponent } from './views/edit-product/edit-product.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsTableComponent,
    AuthComponent,
    ErrorComponent,
    SingleProductComponent,
    HeaderComponent,
    NewProductComponent,
    EditProductComponent,
    ProductFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [ProductService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
