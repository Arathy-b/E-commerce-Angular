import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiserviceService } from '../../../../apiservice.service';
import { log } from 'console';
import { Product } from '../../../../models/data-types';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.scss'
})
export class ListProductComponent implements OnInit{
  title="editProfileForm";
  reactiveForm:FormGroup | undefined;
  editStatus:any;
  errorMessage: string | undefined;
  editProductForm:FormGroup | undefined;
  productData:any[]=[];


  productId:any;
  editProductFormVisible: boolean = false;
  viewProductVisible:boolean=false;
 
 
 
  constructor(  private http:HttpClient,private api:ApiserviceService,
    private router:Router,
    private route: ActivatedRoute,){}
  ngOnInit(){
    this.api.getReturn(`http://localhost:8084/api/v1/admin/listProducts`).subscribe(
      (data:any) => {
        console.log(data);
        this.productData=data;
      },
      (error) => {
        console.error(error);
      }
    );
 
    this.editProductForm = new FormGroup({
      title: new FormControl(null),
      description: new FormControl(null),
      price: new FormControl(null)

   
    });
 
   

  }
  onAddProduct(){


  }
  onUpdateProduct(){
    this.editProductFormVisible=true;
   

   
  }
  onDeleteProduct(productId:any){
   
    const headers=new HttpHeaders().set("ResponseType","text")
    console.log(('delete product'));
    const confirmation=confirm("Are you sure to delete this product")
    this.api.deleteReturn(`http://localhost:8084/api/v1/admin/delete/${productId}`,{headers}).subscribe((data:any)=>{
      if(data="Product deleted succesfully")
      console.log(data);
    const confirmation=confirm('product deleted succesfully')
      

    },(error)=>{
      console.error(error);
      

    })
    

  }
  
}

   
  //   onUpdateProduct(){
  //     console.log('onUpdateMenu clicked');

  //     this.editProductFormVisible = true;
  //     this.api.postReturn(`http://localhost:8084/api/v1/admin/update/${this.prodId}`).subscribe(
  //       (data) => {
  //         console.log(data);
   
  //       }
  //     );
  //     console.log(formData);
   
  //   }
   
  //   onCancelUpdate(){
  //     this.editProductFormVisible=false;
  //   }
   
   
   
    




