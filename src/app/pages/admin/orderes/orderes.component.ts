import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiserviceService } from '../../../apiservice.service';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { error } from 'console';

@Component({
  selector: 'app-orderes',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './orderes.component.html',
  styleUrl: './orderes.component.scss'
})
export class OrderesComponent  implements OnInit{

  orders:any[]=[];

  constructor(private api:ApiserviceService,
    private router:RouterModule,
    private http:HttpClient){}

  ngOnInit(): void {
    this.api.getReturn('http://localhost:8084/api/v1/admin/getAllOrderDetails').subscribe((data:any)=>{
      console.log(data);
      this.orders=data;

      
    },(error)=>{
      console.log(error);
      
    })
    
  }
  changeStatus(orderId:any){
    const headers = new HttpHeaders().set("ResponseType","text")
    this.api.postReturn(`${environment.BASE_API_URL}/admin/order/${orderId}/changeStatus`,null,{headers}).subscribe((data)=>{
      if(data){
        this.ngOnInit()
      }
      
    },(error)=>{
      console.log(error);
      
    })
  }

}
