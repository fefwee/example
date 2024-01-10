import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() btnTitle!: {
    title: string
    delete: boolean
  };

  @Input() title!: {
    header: string
    subHeader: string
  };

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
