import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-top-notification',
  templateUrl: './top-notification.component.html',
  styleUrls: ['./top-notification.component.css']
})
export class TopNotificationComponent implements OnInit {

  public isVisible = false;
  
  @ViewChild('close') closeNotification!: ElementRef;

  constructor() { }


  ngOnInit(): void {
  }

  public hideNotification() {
    this.closeNotification.nativeElement.style.right = '-100%';
  }

}
