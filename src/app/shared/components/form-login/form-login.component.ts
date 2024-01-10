import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent  implements OnInit{

  @Input() headerText!: string;
  @Input() authPage!: boolean;
  @Input() textButton!: string;
  @Output()userData:EventEmitter<any> = new EventEmitter();
  public loginForm!: FormGroup;

  ngOnInit(): void {
    this.createForm()
  }


  createForm (){
    this.loginForm = new FormGroup({
        username: new FormControl('',[Validators.required]),
        password: new FormControl('',[Validators.required]),
    })
  }

  sendDataUser (){
    this.userData.emit(this.loginForm.value)
  }
}
