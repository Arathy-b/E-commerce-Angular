import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiserviceService } from '../../apiservice.service';
import { error } from 'console';
import { Router, RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  customer:any
  username:any
  cartItems:number | undefined;
  cartProducts:any[]=[]
  cart:any;

  constructor(private api:ApiserviceService,private router:Router){}
  
  users: any[] = [];
  role:any

  ngOnInit(): void {

    
    this.router.events.subscribe((value:any)=>{
      if(value.url){
        if(typeof localStorage!=="undefined" && localStorage.getItem("customer")){      
          this.customer=localStorage.getItem("customer")      
          this.username=JSON.parse(this.customer).name;
          this.role=JSON.parse(this.customer).role.roleName;
          console.log(this.role);
          this.gettingCart();
        }else{
          this.username=null
        }
      }
    })
  }

  gettingCart(){

    this.api.getReturn(`http://localhost:8084/products/cart`).subscribe((data:any)=>{
      this.cartProducts= data
      console.log(data);
      
        this.cartItems=data.length;
        localStorage.setItem('cartLength',data.length);
        localStorage.setItem('storeCart',this.cartProducts.toString());
      }
    ,(error)=>{
      console.log(error);
    });
  }

   


  logout(){
    this.api.getReturn(`${environment.BASE_API_URL}/auth/logout`).subscribe((data)=>{
      localStorage.removeItem("customer")
      localStorage.removeItem("token")
    this.router.navigate(['/login'])
    },(error)=>{
      console.log(error);
      
    })
  }
}
