import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../../models/data-types';
import { ApiserviceService } from '../../../../apiservice.service';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.scss'
})
export class UpdateProductComponent {
  productData: undefined |Product;
  productMessage: undefined | string;
  constructor(private api:ApiserviceService){}
  ngOnInit():void{


}
}
