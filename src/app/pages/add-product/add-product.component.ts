import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { error } from 'node:console';
import { ApiserviceService } from '../../apiservice.service';
import { Product } from '../../models/data-types';
import { environment } from '../../../environments/environment.development';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  addProduct : FormGroup|any;
  addProductMessage:string|undefined;
  constructor(private api:ApiserviceService,private fb:FormBuilder,private snackBar: MatSnackBar){}
  
  ngOnInit():void{
    this.addProduct=this.fb.group({
        title:['',[]],
        description:['',[]],
        price:['',[]],
        quantity:['',[]],
        category:['',[]],
        image:null

    })
    
  }
  submit(){

  if(this.addProduct.invalid)
  {
    this.addProduct.markAllAsTouched();
    return;
    }
    const formValue=this.addProduct.getRawValue();

  const productData:Product={
    title:formValue.title,
    description:formValue.description,
    price:formValue.price,
    quantity:formValue.quantity,
    category_id:formValue.category
  }
  const formData = new FormData();
formData.append('imageFile', formValue.image);
console.log(formData.get('imageFile'));

  console.log(productData);
    this.api.postReturn(`${environment.BASE_API_URL}/admin/createProduct`,(productData)).subscribe((data:any)=>{   
      const headers = new HttpHeaders().set('ResponseType','text')   
      this.api.postReturn(`${environment.BASE_API_URL}/admin/uploadImage/${data.id}`,formData,{headers}).subscribe((data)=>{
        console.log("product successfully created");
        let snackBarRef = this.snackBar.open('Category added succesfully!!');
        // const confirmation=confirm('Product added succesfully')
      },(error: any)=>{
        console.log(error);
      })
    },(error: any)=>{
      console.log(error);
    })
    }
    onFileChange(event:any) {
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.addProduct.patchValue({
          image: file
        });
      }
    }   
}
