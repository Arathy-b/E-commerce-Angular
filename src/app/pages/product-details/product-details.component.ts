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
  cartProducts:any[]=[]
  showGoToCart:boolean=false
  productDetails:any
  productQuantity:number=1;
  constructor(private activeRoute:ActivatedRoute,private api:ApiserviceService,private router:Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(s => {
      this.prodId=s["productId"]
    });
    this.getProductDetails()
    
    
  }
  getProductDetails(){
    this.api.getReturn(`http://localhost:8084/products/View/${this.prodId}`).subscribe((data:any)=>{
      this.productDetails=data
      setTimeout(()=>this.getProductsByCat())
      setTimeout(()=>this.getCartDetails())
    },(error)=>console.log(error))
  }

  getCartDetails(){
    this.api.getReturn(`http://localhost:8084/products/cart`).subscribe((data:any)=>{
      this.cartProducts= data
        this.showGoToCart=this.cartProducts.some(r => r.id === this.productDetails.id);      
    },(error)=>{
      console.log(error);
    })
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
      this.api.getReturn(`http://localhost:8084/products/category/${this.productDetails.category.id}`).subscribe((data:any)=>{
        this.products = data.filter((obj1:any) => this.productDetails.id !== obj1.id);
      },(error)=>console.log(error))
    }
     showDetails(prodId:any){
      this.router.navigate([`productdetails/${prodId}`])
  }

     }
  

  


