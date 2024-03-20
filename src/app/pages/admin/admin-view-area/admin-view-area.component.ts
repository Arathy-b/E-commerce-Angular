import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataserviceService } from '../../../dataservice.service';
import { ListProductComponent } from './list-product/list-product.component';
import { ListcategoryComponent } from "./listcategory/listcategory.component";
import orders from 'razorpay/dist/types/orders';
import { OrderesComponent } from '../orderes/orderes.component';
import { CustomersComponent } from '../customers/customers.component';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from '../../../apiservice.service';



@Component({
    selector: 'app-admin-view-area',
    standalone: true,
    templateUrl: './admin-view-area.component.html',
    styleUrl: './admin-view-area.component.scss',
    imports: [CommonModule, ListProductComponent, ListcategoryComponent,OrderesComponent,CustomersComponent,RouterModule]
})
export class AdminViewAreaComponent  implements OnInit{
  // product_count:any;
  // category_count:any;
  // customer_count:any;
  // order_item_count:any;
  count:any;

  constructor(private dataService:DataserviceService,private router:RouterModule,private http:HttpClient,private api:ApiserviceService){}
  showWhat:string=''

  ngOnInit(): void {
    this.dataService.notifyObservale$.subscribe((data)=>{
      this.showWhat=data
      console.log(this.showWhat);

      this.api.getReturn('http://localhost:8084/api/v1/admin/getCount').subscribe((data)=>{
        this.count=data;
        console.log(data);
        
      },(error)=>{
        console.log(error);
        
      })

      
    })
  }
  viewDetails(){}
}
