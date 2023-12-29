import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiserviceService } from '../../../../apiservice.service';
import { log } from 'console';
import { Product } from '../../../../models/data-types';
import { MatSnackBar } from '@angular/material/snack-bar';

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


  productData:any[]=[];


  viewProductVisible:boolean=false;
 
 
 
  constructor(  private http:HttpClient,private api:ApiserviceService,
    private router:Router,
    private route: ActivatedRoute,private snackBar:MatSnackBar){}
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
 

 
   

  }
  onAddProduct(){


  }

  onDeleteProduct(productId:any){
   
    const headers=new HttpHeaders().set("ResponseType","text")
    console.log(('delete product'));
    const confirmation=confirm("Are you sure to delete this product")
    this.api.deleteReturn(`http://localhost:8084/api/v1/admin/delete/${productId}`,{headers}).subscribe((data:any)=>{
      if(data="Product deleted succesfully")
      console.log(data);
     
      let snackBarRef = this.snackBar.open('Product deleted succesfully!!');
    },(error)=>{
      console.error(error);
    })
    

  }
  
}

   

   
    




