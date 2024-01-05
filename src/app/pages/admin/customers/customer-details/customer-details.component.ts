import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from '../../../../apiservice.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.scss'
})
export class CustomerDetailsComponent implements OnInit {
  customers:any;
  orders:any[]=[];
  custId:any;
  constructor(private http:HttpClient,private api:ApiserviceService,private router:RouterModule,private activeRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.activeRoute.params.subscribe(s => {
      this.custId=s["custId"]
    });
    this.api.getReturn('http://localhost:8084/api/v1/customer/getCustomer/'+this.custId).subscribe((data:any)=>{
      console.log(data);
      this.customers=data;
      this.api.getReturn('http://localhost:8084/api/orders/allOrders/'+this.customers.id).subscribe((data:any)=>{
      console.log(data);
      this.orders=data;
      
    },(error)=>{
      console.log(error);
      
    })
      
    },(error)=>{
      console.log(error);
      
    })
   
  }

}
