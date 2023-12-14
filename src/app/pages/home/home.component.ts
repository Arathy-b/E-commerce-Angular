import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiserviceService } from '../../apiservice.service';
import { Product } from '../../models/data-types';
import { HometopNavbarComponent } from '../hometop-navbar/hometop-navbar.component';
import { Router, RouterModule } from '@angular/router';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HometopNavbarComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  trendingProducts: any|Product = [];
  bestOfElectronics:any|Product=[];

  constructor(private api:ApiserviceService, private router:Router) { }

  ngOnInit(): void {
    
    
    this.api.getReturn("http://localhost:8084/products/trending").subscribe((result: any)=>{
           this.trendingProducts = result;
           console.log(this.trendingProducts);
           
          },(error)=>{
            console.log(error);
            
          })
          this.api.getReturn("http://localhost:8084/products/category").subscribe((result: any)=>{
           this.bestOfElectronics = result;
           console.log(this.bestOfElectronics);
           
          },(error)=>{
            console.log(error);
            
          })
        }
        showProduct(){
        this.router.navigate(['/productdetails'])

      }
    
}


