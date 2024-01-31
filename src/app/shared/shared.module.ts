import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { InputTextModule } from 'primeng/inputtext';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingleCardComponent } from './components/single-card/single-card.component';
import { SliderComponent } from './components/slider/slider.component';
import { BestProductsComponent } from './components/best-products/best-products.component';
import { DownNotificationComponent } from './components/down-notification/down-notification.component';
import { TopNotificationComponent } from './components/top-notification/top-notification.component';
import { ModalComponent } from './components/modal/modal.component';
import { SelectCheckboxComponent } from './components/select-checkbox/select-checkbox.component';
import { CreateAndEditFormComponent } from './components/create-and-edit-form/create-and-edit-form.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { UploadComponent } from './components/upload/upload.component';
import { CommentsComponent } from './components/comments/comments.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { PrintAndShareComponent } from './components/print-and-share/print-and-share.component';
import { NavProductsComponent } from './components/nav-products/nav-products.component';
import { EditProductsComponent } from './components/edit-products/edit-products.component';
import { MainProductsComponent } from './components/main-products/main-products.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { NoAccessPageComponent } from './components/no-access-page/no-access-page.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FormLoginComponent,
    FooterComponent,
    SingleCardComponent,
    SliderComponent,
    BestProductsComponent,
    DownNotificationComponent,
    TopNotificationComponent,
    ModalComponent,
    SelectCheckboxComponent,
    CreateAndEditFormComponent,
    UploadComponent,
    CommentsComponent,
    DetailProductComponent,
    PrintAndShareComponent,
    NavProductsComponent,
    EditProductsComponent,
    MainProductsComponent,
    ErrorPageComponent,
    NoAccessPageComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextareaModule,
  ],
  exports: [
    HeaderComponent,
    FormLoginComponent,
    FooterComponent,
    SingleCardComponent,
    SliderComponent,
    BestProductsComponent,
    DownNotificationComponent,
    TopNotificationComponent,
    ModalComponent,
    SelectCheckboxComponent,
    CreateAndEditFormComponent,
    UploadComponent,
    CommentsComponent,
    DetailProductComponent,
    PrintAndShareComponent,
    NavProductsComponent,
    EditProductsComponent,
    MainProductsComponent
  ]
})
export class SharedModule { }
