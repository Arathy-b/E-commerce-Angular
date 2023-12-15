import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, UntypedFormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApiserviceService } from '../../apiservice.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  checkoutForm:FormGroup|any;
  title='formvalidation';

  constructor(private fb:FormBuilder,private http:ApiserviceService){}
  ngOnInit(){
    this.checkoutForm=this.fb.group({
      address:'',
      city:'',
      state:'',
      country:'',
      pin:''
    })
  }

  onsubmit(){
    if(this.checkoutForm.invalid)
  {
    this.checkoutForm.markAllAsTouched();
    return;
    }

    const formValues=this.checkoutForm.getRawValue();
    console.log(this.checkoutForm);
    const data={
      address:formValues.address,
      city:formValues.city,
      state:formValues.state,
      country:formValues.country,
      pin:formValues.pin
    }
    // console.log(data);
    // this.http.postReturn("http://localhost:8084/api/orders/placeOrder").subscribe((data:any)=>{

    // })
    

  }

}
