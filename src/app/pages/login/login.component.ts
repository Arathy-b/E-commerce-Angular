import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiserviceService } from '../../apiservice.service';
import { error, log } from 'console';
import { environment } from '../../../environments/environment.development';
import { Router, RouterModule } from '@angular/router';
import customers from 'razorpay/dist/types/customers';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm : FormGroup|any;
  title='formvalidation';
  submitted:boolean=false;
  loginSuccess:boolean | any;
  errorMessage:string |any;
  customerDetails: any;
  userRole: any;
  userRoles: any;
  

  constructor(private fb : FormBuilder,private http:ApiserviceService,private router:Router){}
 
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
  this.http.postReturn(`${environment.BASE_API_URL}/auth/login`,userData).subscribe((data:any)=>{
    if(data.status){
      this.loginSuccess = true;
      this.loginForm.reset();
      const jwtToken:string = data.response;
      localStorage.setItem("token",jwtToken)

  
      
      this.http.getReturn(`${environment.BASE_API_URL}/customer/getCustomerDetails`).subscribe((data)=>{
        localStorage.setItem("customer",JSON.stringify(data)) 
        
        this.customerDetails=localStorage.getItem("customer");  
        this.userRole=JSON.parse(this.customerDetails).role;
        this.userRoles=this.userRole.roleName;
  
        if(this.userRoles=="ADMIN"){
          this.router.navigate(['/admin'])
        }
        else{
          this.router.navigate(['/home'])
  
        }
        
      },(error)=>{
        console.log(error);
        this.errorMessage = data.response;
      this.loginSuccess = false;
      })

 

    }else{
      this.errorMessage = data.response;
      this.loginSuccess = false;

    }
  })
  

  this.submitted=false;
  
 }
}

