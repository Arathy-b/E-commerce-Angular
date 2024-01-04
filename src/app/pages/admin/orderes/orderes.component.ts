import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiserviceService } from '../../../apiservice.service';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  changeStatus(currentStatus:any){
    
  }

}
