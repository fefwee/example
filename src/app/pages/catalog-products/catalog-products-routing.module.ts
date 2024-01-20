import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogProductsComponent } from './catalog-products.component';
import { SingleCardComponent } from 'src/app/shared/components/single-card/single-card.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogProductsComponent,
  },
  {
    path:':id',
    component:SingleCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogProductsRoutingModule { }
