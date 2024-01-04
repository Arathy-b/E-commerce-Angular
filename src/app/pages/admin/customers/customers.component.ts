import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiserviceService } from '../../../apiservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent implements OnInit{

  customers:any;
  constructor(private api:ApiserviceService,private http:HttpClient,private router:RouterModule){}
  ngOnInit(): void {
    this.api.getReturn('http://localhost:8084/api/v1/admin/getAllCustomers').subscribe((data):any=>{
      console.log(data);
      this.customers=data;
      
    },(error)=>{
      console.log(error);
      
    })
   
  }

}
