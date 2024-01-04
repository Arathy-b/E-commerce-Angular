import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiserviceService } from '../../../../apiservice.service';
import { FormBuilder } from '@angular/forms';
import { error } from 'console';

@Component({
  selector: 'app-listcategory',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './listcategory.component.html',
  styleUrl: './listcategory.component.scss'
})
export class ListcategoryComponent implements OnInit {
  catData:any

  constructor(  private http:HttpClient,
    private api:ApiserviceService,
    private router:Router){}
 
  ngOnInit(): void {
    this.api.getReturn(`http://localhost:8084/api/v1/admin/listCategory`).subscribe((data:any)=>{
      console.log(data);
      this.catData=data;
      
    },(error)=>{
      console.error(error);
      

    })
    
    
  }
  onAddCategory(){

  }

}
