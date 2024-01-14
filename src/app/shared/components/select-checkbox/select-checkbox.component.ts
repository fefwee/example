import { Component, Input } from '@angular/core';

interface Checbox {
  id: number
  title: string
  checked: boolean
}

@Component({
  selector: 'app-select-checkbox',
  templateUrl: './select-checkbox.component.html',
  styleUrls: ['./select-checkbox.component.css']
})
export class SelectCheckboxComponent {
  @Input() extended = false;
  public isActive = false;

  public arrCheckBox: Checbox[] = [
    { id: 1, title: 'Lorem ipsum dolor sit amet', checked: false },
    { id: 2, title: 'Lorem ipsum dolor sit amet', checked: false },
    { id: 3, title: 'Lorem ipsum dolor sit amet', checked: false },
    { id: 4, title: 'Lorem ipsum dolor sit amet', checked: false },
  ]

  public toogleIsActive(id: number) {
    this.arrCheckBox.forEach((item: Checbox) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
    })
  }
}
