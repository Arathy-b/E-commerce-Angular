import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { error } from 'console';
import { ApiserviceService } from '../../apiservice.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm:FormGroup|any;
  title='formvalidation';
  submitted=false;
  signupSuccess:boolean | any;
  errorMessage:string |any;

  constructor(private fb:FormBuilder,private http:ApiserviceService,private router:Router){}
  ngOnInit(){
    this.signupForm=this.fb.group({
      username:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email]],
      phoneno:['',[Validators.required,Validators.pattern("[0-9]{10}")]],
      password:['',[Validators.required,Validators.pattern("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}")]],
      password2:['',[Validators.required,Validators.pattern("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}")]]
    })
  }
  onsubmit(){
    this.submitted=true;

    if(this.signupForm.invalid)
    {
      this.signupForm.markAllAsTouched();
      return;
      }
      const formValues=this.signupForm.getRawValue()
    
      const userData={
        name:formValues.username,
        email:formValues.email,
        phone_number:formValues.phoneno,
        password:formValues.password
    
      }
      const apiUrl="http://localhost:8084/api/v1/auth/register";

      this.http.postReturn(apiUrl,userData).subscribe((data:any)=>{
        console.log(data);
        if(data.status){
          this.signupSuccess = true;
          this.signupForm.reset();
          this.router.navigate(['login'])
    
        }else{
          this.errorMessage = data.response;
          this.signupSuccess = false;
    
        }  
      })  
      this.submitted=false;

  }

}
