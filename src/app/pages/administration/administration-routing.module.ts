import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { CreateAndEditFormComponent } from 'src/app/shared/components/create-and-edit-form/create-and-edit-form.component';
import { MainProductsComponent } from 'src/app/shared/components/main-products/main-products.component';
import { EditProductsComponent } from 'src/app/shared/components/edit-products/edit-products.component';

const routes: Routes = [
  {
    path: '',
    component: AdministrationComponent,
    children: [
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full',
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'products',
        component: MainProductsComponent,
        children: [
          {
            path: '',
            component: ProductsComponent
          },
        ]
      },
    ]
  },
  {
    path: 'products/:id',
    component: EditProductsComponent
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
