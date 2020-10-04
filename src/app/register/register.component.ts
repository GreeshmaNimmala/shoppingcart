import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';
import { FnParam } from '@angular/compiler/src/output/output_ast';


function passwordMatchValidator(form){
  const password=form.get('Password');
  const confirmpassword=form.get('ConfirmPassword');

  if(password !== confirmpassword){
    confirmpassword.setErrors({passwordMatch:true})
  }
  else{
    confirmpassword.setErrors(null)
  }
  return null;
}
function symbolValidator(control){
  if(control.value.indexOf('@')>-1){
    return null;
  }
  else{
    return {
      symbol:true
    }
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    // this.registerForm=new FormGroup({
    //   'Name':new FormControl(null,[Validators.required]),
    //   'Email':new FormControl(null,[Validators.required,Validators.email]),
    //   'Username':new FormControl(null,[Validators.required]),
    //   'Password':new FormControl(null,[Validators.required,Validators.minLength(8)]),
    //   'ConfirmPassword':new FormControl(null,[Validators.required,Validators.minLength(8)])
    // });
    this.registerForm=this.formBuilder.group({
      'Name':['',Validators.required],
      'Email':['',[Validators.required,Validators.email]],
      'Username':['',Validators.required],
      'Password':['',[Validators.required,Validators.minLength(8),symbolValidator]],
      'ConfirmPassword':['']


    },{
      validators:passwordMatchValidator
    });
  }

  onSubmit(){
    console.log(this.registerForm.value);
  }

}
