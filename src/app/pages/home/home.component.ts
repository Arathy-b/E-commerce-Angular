import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiserviceService } from '../../apiservice.service';
import { Product } from '../../models/data-types';
import { HometopNavbarComponent } from '../hometop-navbar/hometop-navbar.component';
import { MainScreenComponent } from '../main-screen/main-screen.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HometopNavbarComponent,MainScreenComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  trendingProducts: any|Product = [];

  constructor(private api:ApiserviceService) { }

  ngOnInit(): void {
    
    this.api.getReturn("http://localhost:8084/products/trending").subscribe((result: any)=>{
           this.trendingProducts = result;
           console.log(this.trendingProducts);
           
          },(error)=>{
            console.log(error);
            
          })
      }
}


