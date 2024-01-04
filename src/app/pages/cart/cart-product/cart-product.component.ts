import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiserviceService } from '../../../apiservice.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cart-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-product.component.html',
  styleUrl: './cart-product.component.scss'
})
export class CartProductComponent implements OnInit{
  constructor(private api:ApiserviceService){}
  @Input() productDetails:any
  @ViewChild("quantity") quantity!:ElementRef
  @Output() removeEvent = new EventEmitter<any>()
  @Output() updateTotal = new EventEmitter<any>()
  qnty:string =""
  subTotal:any
  totalPrice:any
  
  ngOnInit(): void {
    this.subTotal = this.productDetails.price * this.productDetails.quantity
    
  }
  onMinus(){
    var y: number = +this.quantity.nativeElement.innerText;
    if(y!=1){
      y--
      this.quantity.nativeElement.innerText = y.toString()
      this.subTotal = this.productDetails.price * y
    }
    this.updateQuantity(y)
     
  }
  onPlus(){
    var y: number = +this.quantity.nativeElement.innerText;
    y++
    this.quantity.nativeElement.innerText = y.toString()
    this.subTotal = this.productDetails.price * y
    this.updateQuantity(y)
    
  }
  removeProduct(){
    const headers = new HttpHeaders().set("ResponseType","text")
    this.api.deleteReturn(`http://localhost:8084/products/delete/${this.productDetails.cartId}/${this.productDetails.id}`,{headers}).subscribe((data:any)=>{
      if(data="successfully"){
        this.removeEvent.emit(this.subTotal)
      }
      
    },(error)=>{
      console.log(error);
      
    })
  }
  updateQuantity(count:number){
    const reqBody = {
      cartId:this.productDetails.cartId,
      productId:this.productDetails.id,
      newQuantity:count
    }
    const headers = new HttpHeaders().set("ResponseType","text")
    this.api.postReturn(`http://localhost:8084/products/updateQuantity`,reqBody,{headers}).subscribe((data:any)=>{
      setTimeout(()=>this.updateTotal.emit(this.productDetails.price))   
    },(error)=>{
      console.log(error);      
    })
  }
}
