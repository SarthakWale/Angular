import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactive';
  loginform=new FormGroup({
    user:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)])
  })
  loginUser(){
    console.warn(this.loginform.value);
    this.onReset();
  }
  get user(){
    return this.loginform.get('user')
  }
  get password(){
    return this.loginform.get('password')
  }
  onReset(){
    this.loginform.reset();
  }
  

}
