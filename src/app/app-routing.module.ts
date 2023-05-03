import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsComponent } from './products/products.component';
import { LogInComponent } from './log-in/log-in.component';
import { AuthGurdGuard } from './service/auth-gurd.guard';

const routes: Routes = [{
  path : "", component : LogInComponent
},{
  path : "products",canActivate : [AuthGurdGuard],  component : ProductsComponent
},{
  path : 'Addproduct', canActivate : [AuthGurdGuard], component : AddProductComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
