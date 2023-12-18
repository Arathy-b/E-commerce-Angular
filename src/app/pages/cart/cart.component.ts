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
  ngOnInit(): void {
    this.getCartDetails()
  }
  getCartDetails(){
    this.api.getReturn(`http://localhost:8084/products/cart`).subscribe((data:any)=>{
      this.cartProducts= data
    },(error)=>{
      console.log(error);
      
    })
  }
  onRemoveEvent(event:any){
    if(event){
      this.getCartDetails()
    }

  }
}
