import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-down-notification',
  templateUrl: './down-notification.component.html',
  styleUrls: ['./down-notification.component.css']
})
export class DownNotificationComponent implements OnInit {
  public isVisible = true;
  @ViewChild('close') closeNotification!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('notificationVisited')){
      this.isVisible = !this.isVisible;
    }
  }

  public hideNotification() {
    this.closeNotification.nativeElement.style.bottom = '-100%';
    localStorage.setItem('notificationVisited','true')
  }


}
