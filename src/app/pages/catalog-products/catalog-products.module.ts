import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogProductsRoutingModule } from './catalog-products-routing.module';
import { CatalogProductsComponent } from './catalog-products.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CatalogProductsComponent],
  imports: [
    CommonModule,
    CatalogProductsRoutingModule,
    SharedModule
  ]
})
export class CatalogProductsModule { }
