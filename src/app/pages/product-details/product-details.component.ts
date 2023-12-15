import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/data-types';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { ApiserviceService } from '../../apiservice.service';


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
  constructor(private activeRoute:ActivatedRoute) { }
  addToCart(){

  }
  buyNow(){}
  showProduct(){
    // this.router.navigate(['/cart'])

  }

}
