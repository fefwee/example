import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  public data!: any;
  public visible = true;

  public onFileInput(event: any) {
    console.log(event)
    this.data = event.target.value.split('\\')[2];
    console.log(this.data)
    this.visible = !this.visible;
  }

  public removeData() {
    this.visible = !this.visible
  }
}
