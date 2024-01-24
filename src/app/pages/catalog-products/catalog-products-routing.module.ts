import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogProductsComponent } from './catalog-products.component';
import { SingleCardComponent } from 'src/app/shared/components/single-card/single-card.component';
import { DetailProductComponent } from 'src/app/shared/components/detail-product/detail-product.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogProductsComponent,
  },
  {
    path:':id',
    component:DetailProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogProductsRoutingModule { }
