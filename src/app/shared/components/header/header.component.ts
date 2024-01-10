import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public toggleDownList = false;
  constructor() { }

  public toggleDownFn() {
    this.toggleDownList = !this.toggleDownList
  }
}
