import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiserviceService } from '../../apiservice.service';
import { error } from 'console';
import { CartProductComponent } from './cart-product/cart-product.component';
import { Router, RouterModule } from '@angular/router';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,CartProductComponent,RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  
  constructor(private api:ApiserviceService,private dataService:DataserviceService,private router:Router){}
  cartProducts:any[] = []
  totalPrice:any =0 
  orderItems:any[]=[]
  ngOnInit(): void {
    
    this.getCartDetails()
    
  }
  getCartDetails(){
    this.orderItems=[]
    this.api.getReturn(`http://localhost:8084/products/cart`).subscribe((data:any)=>{
      this.cartProducts= data
      this.totalPrice=0
      this.cartProducts.map((cartProduct)=>{
        this.totalPrice = this.totalPrice +  (cartProduct.price * cartProduct.quantity)
      })
      setTimeout(()=>{
        this.cartProducts.map((product)=>{
          const orderItem={
            quantity:product.quantity,
            productId:product.id
          }
          this.orderItems.push(orderItem)
        })
        console.log(this.orderItems);
      })
      
      
    },(error)=>{
      console.log(error);
    })
  }
  onRemoveEvent(value:any){
    if(value){
      this.getCartDetails()
      this.router.navigate(['/cart'])
    }
  }
  updateTotal(value:any){
    this.getCartDetails()
  }
  placeOrder(){
    this.dataService.notifyOther({
      orderItems:this.orderItems,
      cartId:this.cartProducts[0].cartId
    })
    this.router.navigate(['/checkout'])
  }
  
}
