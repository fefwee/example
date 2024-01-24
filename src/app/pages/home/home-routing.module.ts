import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DetailProductComponent } from 'src/app/shared/components/detail-product/detail-product.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: ':id',
    component: DetailProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
