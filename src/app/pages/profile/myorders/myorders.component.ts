import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiserviceService } from '../../../apiservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-myorders',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './myorders.component.html',
  styleUrl: './myorders.component.scss'
})
export class MyordersComponent implements OnInit {
  constructor(private api:ApiserviceService,private router:RouterModule,private http:HttpClient,private activeRoute:ActivatedRoute){}
  orders:any[]=[];
  custId:any;
  ngOnInit(){
    this.activeRoute.params.subscribe(s => {
      this.custId=s["custId"]
    });
    this.api.getReturn('http://localhost:8084/api/orders/allOrders/'+this.custId).subscribe((data:any)=>{
      console.log(data);
      this.orders=data;
      
    })
    
  }

 

}
