import { Component, Injector, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiserviceService } from '../../apiservice.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {
  checkoutForm:FormGroup|any;
  title='formvalidation';
  totalPrice:any;
  order={
    address:'',
      city:'',
      state:'',
      country:'',
      pin:''
  }

  constructor(private fb:FormBuilder,private http:ApiserviceService,private activatedRoute: ActivatedRoute,  private router: Router,
    private injector: Injector){}
  ngOnInit(){
    this.checkoutForm=this.fb.group({
      address:'',
      city:'',
      state:'',
      country:'',
      pin:''
    })
  }

  onsubmit(){}
 
    // const formValues=this.checkoutForm.getRawValue();
    // const data={
    //   address:formValues.address,
    //   city:formValues.city,
    //   state:formValues.state,
    //   country:formValues.country,
    //   pin:formValues.pin
    }
    // console.log(data);
    // this.http.putReturn("http://localhost:8084/api/orders/placeOrder",data).subscribe((data:any)=>{

    // })
    

  


