import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/registration/registration.module').then(m => m.RegistrationModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/administration/administration.module').then(m => m.AdministrationModule)
  },
  {
    path: 'create-recipe',
    loadChildren: () => import('./pages/create-recipe/create-recipe.module').then(m => m.CreateRecipeModule)
  },
  {
    path: 'recipe',
    loadChildren: () => import('./pages/catalog-products/catalog-products.module').then(m => m.CatalogProductsModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
