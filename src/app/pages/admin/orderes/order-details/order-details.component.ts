import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiserviceService } from '../../../../apiservice.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import items from 'razorpay/dist/types/items';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent implements OnInit{
  orders:any[]=[];
  orderId:any;

  constructor(private api:ApiserviceService,private router:RouterModule,private http:HttpClient,private activeRoute:ActivatedRoute){}
  ngOnInit(){
    this.activeRoute.params.subscribe(s => {
      this.orderId=s["orderId"]
    });
    this.api.getReturn('http://localhost:8084/api/orders/'+this.orderId).subscribe((data:any)=>{
      console.log(data);
      this.orders=data;      
    },error=>{
      console.log(error);
      
    })

  }

}
