import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { TopNotificationComponent } from '../top-notification/top-notification.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-print-and-share',
  templateUrl: './print-and-share.component.html',
  styleUrls: ['./print-and-share.component.css']
})
export class PrintAndShareComponent {

  @ViewChild('dynamic', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<ModalComponent>;

  public print() {
    window.print();
  }
  public share() {
    this.componentRef = this.viewRef.createComponent(ModalComponent);
    this.componentRef.instance.options  .next({
      title: 'Поделиться',
      delete: true,
      header: 'Поделиться этим товаром?',
      subHeader: 'Вы хотите поделиться этим товаром со всеми?'
    });
  }
}
