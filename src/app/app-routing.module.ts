import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { SingleProductComponent } from './single-product/single-product.component';
import { AuthComponent } from './views/auth/auth.component';
import { EditProductComponent } from './views/edit-product/edit-product.component';
import { ErrorComponent } from './views/error/error.component';
import { NewProductComponent } from './views/new-product/new-product.component';
import { ProductsTableComponent } from './views/products-table/products-table.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  {
    path: 'products',
    canActivate: [AuthGuard],
    component: ProductsTableComponent,
  },
  {
    path: 'product/new',
    canActivate: [AuthGuard],
    component: NewProductComponent,
  },
  {
    path: 'product/:id', //: pour specifier que c'est un paramètre
    canActivate: [AuthGuard],
    component: SingleProductComponent,
  },
  {
    path: 'product/edit',
    canActivate: [AuthGuard],
    component: EditProductComponent,
  },
  {
    path: 'product/edit/:id',
    canActivate: [AuthGuard],
    component: EditProductComponent,
  },
  { path: 'not-found', component: ErrorComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
