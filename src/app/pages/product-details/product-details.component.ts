import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/data-types';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiserviceService } from '../../apiservice.service';
import { Router } from 'express';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  productData:undefined | Product;
  productQuantity:number=1;
  // removeCart=false;
  // cartData:product|undefined;
  constructor(private activeRoute:ActivatedRoute, private api:ApiserviceService,private router:Router) { }
  addToCart(){

  }
  buyNow(){}
  showProduct(){
    // this.router.navigate(['/cart'])

  }

}
