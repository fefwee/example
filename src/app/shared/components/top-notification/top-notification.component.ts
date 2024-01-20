import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-top-notification',
  templateUrl: './top-notification.component.html',
  styleUrls: ['./top-notification.component.css']
})
export class TopNotificationComponent implements OnInit {

  @Input() subject = new BehaviorSubject<boolean>(false);
  
  @ViewChild('close') closeNotification!: ElementRef;

  constructor() { }


  ngOnInit(): void {
    console.log(this.subject.value  )
  }

  public hideNotification() {
    this.closeNotification.nativeElement.style.right = '-100%';
  }

}
