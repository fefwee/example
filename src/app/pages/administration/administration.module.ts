import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [AdministrationComponent, UsersComponent, ProductsComponent],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    SharedModule,
    MatTabsModule,
    TableModule
  ],
})
export class AdministrationModule { }
