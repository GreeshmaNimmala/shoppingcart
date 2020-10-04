import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('l',{static:false}) loginForm:NgForm;

  constructor() { }

  ngOnInit(): void {
  }
  user={
    username:'',
    password:'',
    remember:''
  }

  onSubmit(){
    // console.log(this.loginForm.value);
    console.log(this.user);

}
}
