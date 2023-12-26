import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiserviceService } from '../../apiservice.service';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  prodId:number|any
  catId:number|any
  products:any[]=[]
  productDetails:any
  productQuantity:number=1;
  constructor(private activeRoute:ActivatedRoute,private api:ApiserviceService,private router:Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(s => {
      this.prodId=s["productId"]
    });
    this.getProductDetails()
    this.getProductsByCat()
  }
  getProductDetails(){
    this.api.getReturn(`http://localhost:8084/products/View/${this.prodId}`).subscribe((data:any)=>{
      this.productDetails=data
    },(error)=>console.log(error))
  }
  addToCart(){
    const headers = new HttpHeaders().set("ResponseType","text")
    this.api.postReturn(`http://localhost:8084/products/addProductToCart/${this.prodId}`,null,{headers}).subscribe((data:any)=>{
      if(data=="successfull"){
        this.router.navigate(['cart'])
      }
    },(error)=>console.log(error))
    
  }
  buyNow(){
    
        this.router.navigate(['checkout'])
      }
   
    
    getProductsByCat(){
      this.api.getReturn(`http://localhost:8084/products/category/${this.catId}`).subscribe((data:any)=>{
        this.products=data
      },(error)=>console.log(error))
    }
     showDetails(prodId:any){
      this.router.navigate([`productdetails/${prodId}`])
  }

     }
  

  


