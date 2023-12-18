import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiserviceService } from '../../apiservice.service';
import { Product } from '../../models/data-types';
import { HometopNavbarComponent } from '../hometop-navbar/hometop-navbar.component';
import { Router, RouterModule } from '@angular/router';
import { log } from 'node:console';
import { forkJoin } from 'rxjs';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HometopNavbarComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  trendingProducts: any|Product = [];
  bestOfElectronics:any|Product=[];
  categoryList:any[] =[]
  productCatMap:any=new Map<string,[]>

  constructor(private api:ApiserviceService, private router:Router) { }

  ngOnInit(): void {
    this.getAllCategory() 
    
    
  }
  getAllCategory(){
    this.api.getReturn("http://localhost:8084/products/listCategory").subscribe((result: any)=>{
     this.categoryList = result;
     setTimeout(()=>this.getProductsByCategory())      
     console.log(this.productCatMap);   
    },(error)=>{
      console.log(error);            
    })
  }
  getProductsByCategory() {
    const requests = this.categoryList.map(cat =>
      this.api.getReturn(`http://localhost:8084/products/category/${cat.id}`)
    );
    forkJoin(requests).subscribe(
      (results: any[]) => {
        results.forEach((result, index) => {
          const cat = this.categoryList[index];
          this.productCatMap.set(cat.name, result);
        });
      },
      error => {
        console.error(error);
      }
    );
    console.log(this.productCatMap);
    
  }
  showProduct(productId:any){
    this.router.navigate([`productdetails/${productId}`])
  }
}


