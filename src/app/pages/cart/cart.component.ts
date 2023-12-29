import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiserviceService } from '../../apiservice.service';
import { error } from 'console';
import { CartProductComponent } from './cart-product/cart-product.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,CartProductComponent,RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  
  constructor(private api:ApiserviceService){}
  cartProducts:any[] = []
  totalPrice:any =0 
  ngOnInit(): void {
    this.getCartDetails()
  }
  getCartDetails(){
    this.api.getReturn(`http://localhost:8084/products/cart`).subscribe((data:any)=>{
      this.cartProducts= data
      this.totalPrice=0
      this.cartProducts.map((cartProduct)=>{
        this.totalPrice = this.totalPrice +  (cartProduct.price * cartProduct.quantity)
      })
    },(error)=>{
      console.log(error);
      
    })
  }
  onRemoveEvent(value:any){
    if(value){
      this.getCartDetails()
    }
  }
  onMinusTotal(value:any){
    this.totalPrice = this.totalPrice - value
  }
  onPlusTotal(value:any){
    this.totalPrice = this.totalPrice + value
  }
  
}
