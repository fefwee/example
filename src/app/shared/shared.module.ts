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
    CommentsComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextareaModule
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
    CommentsComponent
  ]
})
export class SharedModule { }
