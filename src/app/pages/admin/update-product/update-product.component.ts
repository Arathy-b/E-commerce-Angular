import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from '../../../apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MAT_SNACK_BAR_DATA, MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.scss'
})
export class UpdateProductComponent implements OnInit {
  title="editProfileForm";
  reactiveForm:FormGroup | undefined;
  editStatus:any;
  errorMessage: string | undefined;
  editProductForm:FormGroup|any ;

  productData:any[]=[];


  productId:any;
  editProductFormVisible: boolean = false;
  constructor(  private http:HttpClient,private api:ApiserviceService,
    private router:Router,
    private activeRoute: ActivatedRoute,private snackBar: MatSnackBar){}

    openSuccessSnackbar(message: string): void {
      this.snackBar.open(message, 'Close', {
        duration: 1000,
        verticalPosition: 'bottom',
        panelClass: ['custom-snackbar'],
      });
    }
  ngOnInit(): void {
    this.api.getReturn(`http://localhost:8084/products/View/${this.productId}`).subscribe((data:any)=>{
   
    },(error)=>console.log(error))
  
    this.activeRoute.params.subscribe(s => {
      this.productId=s["productId"]
    });
    this.editProductForm = new FormGroup({
      title: new FormControl(null),
      description: new FormControl(null),
      price: new FormControl(null)

   
    });
  }
  onUpdateProduct(){
    const formValues=this.editProductForm.getRawValue();
    console.log(this.editProductForm);
  
    const productData={
      title:formValues.title,
      description:formValues.description,
      price:formValues.price
    }
    console.log(productData);
    this.editProductFormVisible=true;
    this.api.putReturn(`http://localhost:8084/api/v1/admin/update/${this.productId}`,productData).subscribe(
      (data) => {
        console.log(data);
       this.openSuccessSnackbar('Product updated succesfully!!');
     
      
 
      }
    );


  }

}
