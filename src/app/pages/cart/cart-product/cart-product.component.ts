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
  qnty:string =""
  subTotal:any
  ngOnInit(): void {
    this.subTotal = this.productDetails.price
    
  }
  onMinus(){
    var y: number = +this.quantity.nativeElement.innerText;
    if(y!=1){
      y--
      this.quantity.nativeElement.innerText = y.toString()
      this.subTotal = this.productDetails.price * y
    }
  }
  onPlus(){
    var y: number = +this.quantity.nativeElement.innerText;
    y++
    this.quantity.nativeElement.innerText = y.toString()
    this.subTotal = this.productDetails.price * y
  }
  removeProduct(){
    const headers = new HttpHeaders().set("ResponseType","text")
    this.api.deleteReturn(`http://localhost:8084/products/delete/${this.productDetails.cartId}/${this.productDetails.id}`,{headers}).subscribe((data:any)=>{
      if(data="successfully"){
        this.removeEvent.emit("success")
      }
    },(error)=>{
      console.log(error);
      
    })
  }
}
