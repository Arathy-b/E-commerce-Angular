import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiserviceService } from '../../apiservice.service';
import { error, log } from 'console';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm : FormGroup|any;
  title='formvalidation';
  submitted:boolean=false;
  loginSuccess:boolean | any;
  errorMessage:string |any;
  

  constructor(private fb : FormBuilder,private http:ApiserviceService){}
 
  ngOnInit(){
    this.loginForm=this.fb.group({
      email:['',[Validators.required,Validators.minLength(3)]],
      password:['',[Validators.required,Validators.pattern("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}")]]
  })
  }
  

onsubmit(){
  this.submitted=true;

  if(this.loginForm.invalid)
  {
    this.loginForm.markAllAsTouched();
    return;
    }

  
  const formValues=this.loginForm.getRawValue();
  console.log(this.loginForm);

  const userData={
    email:formValues.email,
    password:formValues.password
  }
  console.log(userData);
  
  const apiUrl="http://localhost:8084/api/v1/auth/login";
  this.http.postReturn(apiUrl,userData).subscribe((data:any)=>{
    console.log(data);
    if(data.status){
      this.loginSuccess = true;
      this.loginForm.reset();

    }else{
      this.errorMessage = data.response;
      this.loginSuccess = false;

    }
  })
  this.submitted=false;
  
 }
}

