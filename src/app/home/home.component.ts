import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  regForm:any;
  Name:string="";
  email:string="";
  subject:string="";
  message:string="";

  constructor(){
    this.regForm = new FormGroup({
      name:new FormControl('', [Validators.required]),
      email:new FormControl('', [Validators.required, Validators.email]),
      sub: new FormControl('', [Validators.required]),
      mesg:new FormControl('', [Validators.required])
    })
  }

  get f(){
    return this.regForm.controls;
  }

  Register(regForm: any){
    console.log(this.regForm.value);
    this.Name = regForm.controls.name.value;
    this.email = regForm.controls.email.value;
    this.subject = regForm.controls.sub.value;
    this.message = regForm.controls.mesg.value;
  }
}
