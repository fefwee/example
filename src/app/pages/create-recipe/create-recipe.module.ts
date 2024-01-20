import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRecipeComponent } from './create-recipe.component';
import { CreateRecipeRoutingModule } from './create-recipe-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [CreateRecipeComponent],
  imports: [
    CommonModule,
    CreateRecipeRoutingModule,
    SharedModule
  ]
})
export class CreateRecipeModule { }
