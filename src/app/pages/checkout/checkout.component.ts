import { Component, Injector, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiserviceService } from '../../apiservice.service';
import { DataserviceService } from '../../dataservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderConfirmationComponent } from '../order-confirmation/order-confirmation.component';


declare var Razorpay:any;

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule,OrderConfirmationComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {
  checkoutForm:FormGroup|any;
  orderItems:any[]=[]
  title='formvalidation';
  totalPrice:any;
  amount:any;
  cartId:any
  order={
    address:'',
      city:'',
      state:'',
      country:'',
      pin:'',
      transactionId:''
  }

  constructor(private fb:FormBuilder,private http:ApiserviceService,private dataService:DataserviceService,private activatedRoute: ActivatedRoute,  private router: Router,
    private injector: Injector,private snackBar: MatSnackBar){}

    openSuccessSnackbar(message: string): void {
      this.snackBar.open(message, 'Close', {
        duration: 1000,
        verticalPosition: 'top',
        panelClass: ['custom-snackbar'],
      });
    }


  ngOnInit(){
    this.dataService.notifyObservale$.subscribe((data)=>{
      this.orderItems = data.orderItems
      this.cartId = data.cartId
      console.log(this.orderItems);
      
    })
    this.checkoutForm=this.fb.group({
      address:'',
      city:'',
      state:'',
      country:'',
      pin:'',
      
    })
  }

  onsubmit(){
    if(this.checkoutForm.invalid)
    {
      this.checkoutForm.markAllAsTouched();
      return;
    }
    const formValues=this.checkoutForm.getRawValue();
    const data={
      address:formValues.address,
      city:formValues.city,
      state:formValues.state,
      country:formValues.country,
      pin:formValues.pin,
  
   }
   const reqBody = {
    orderItem:this.orderItems,
    orderStatus:"PLACED",
    address:data,
    cartId:this.cartId
   }
   console.log(reqBody);
   
    this.http.postReturn("http://localhost:8084/api/orders/placeOrder",reqBody).subscribe((data:any)=>{
      console.log(data);
      this.openSuccessSnackbar('Address added succesfully!!');

     


      this.http.getReturn("http://localhost:8084/api/orders/createTransaction/"+data.totalPrice).subscribe(
        (response) => {
          console.log(response);
          this.openTransactionModel(response);
          
        },
        (error) => {
          console.log(error);
        }
      );
      
    },(error)=>{
      console.log(error);
      
    })


   
      
  
    }
    openTransactionModel(response:any){
      var options=
      {
        order_id:response.orderId,
        key:response.key,
        totalPrice:response.totalPrice,
        currency:response.currency,
        name:'PAYMENT',
        description:'Payment of online shopping',
        image:'https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_640.jpg',
        handler:(response:any)=>{
          if(response!=null && response.razorpay_payment_id != null){
            this.processResponse(response);

          }
          else{
            alert("Payment failed..")
            }
        },
        prefill : {
          name:'LPY',
          email: 'LPY@GMAIL.COM',
          contact: '90909090'
        },
        notes: {
          address: 'Online Shopping'
        },
        theme: {
          color: '#F37254'
        }

      };

     var razorpayObject= new Razorpay(options);
     razorpayObject.open();

    }

    processResponse(resp:any){

      this.order.transactionId=resp.razorpay_payment_id;
      console.log(resp);
      location.href ='/orderConfirmation'
        
    }


  }



  

 


  


