import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface InputData {
  title: string
  delete: boolean
  header: string
  subHeader: string
}
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  
  @Input() options = new BehaviorSubject<InputData>({
    title: '',
    delete: false,
    header: '',
    subHeader: ''
  });


  @ViewChild('modal') modal!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  public openModal() {
    this.modal.nativeElement.style.display = 'block'
  }
  public closeModal() {
    this.modal.nativeElement.style.display = 'none'
  }

}
