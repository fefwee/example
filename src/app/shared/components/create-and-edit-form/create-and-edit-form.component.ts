import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-create-and-edit-form',
  templateUrl: './create-and-edit-form.component.html',
  styleUrls: ['./create-and-edit-form.component.css']
})
export class CreateAndEditFormComponent  {
  @Input() title!: string;
  @Input() data!: any;
  @Input() titleBtn!: string;

  constructor(){
    console.log(this.data)
  }
}
