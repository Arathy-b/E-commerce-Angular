import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/data-types';
import { ApiserviceService } from '../../apiservice.service';

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
  // ngOnInit():void{

  // this.api.postReturn(`${environment.BASE_API_URL}admin/update`,(productData)).subscribe((data:any)=>{   
  //   const headers = new HttpHeaders().set('ResponseType','text')   
  //   this.api.postReturn(`${environment.BASE_API_URL}/admin/uploadImage/${data.id}`,formData,{headers}).subscribe((data)=>{
  //     console.log("product successfully updated");
  //   },(error)=>{
  //     console.log(error);
  //   })
  // },(error)=>{
  //   console.log(error);
  // })
  // }
   
}
