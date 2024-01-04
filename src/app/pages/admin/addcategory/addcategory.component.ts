import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiserviceService } from '../../../apiservice.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { Category } from '../../../models/data-types';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addcategory',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './addcategory.component.html',
  styleUrl: './addcategory.component.scss'
})
export class AddcategoryComponent implements OnInit{
  addCategory: FormGroup|any;
  constructor(private api:ApiserviceService,private fb:FormBuilder,private snackBar: MatSnackBar){}

  openSuccessSnackbar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 1000,
      verticalPosition: 'bottom',
      panelClass: ['custom-snackbar'],
    });
  }
ngOnInit(): void {
  this.addCategory=this.fb.group({
    name:['',[]]
  })
  
}
submit(){
  const formValue=this.addCategory.getRawValue();
  const catData:Category={
    name:formValue.name
  }
  console.log(catData);
  const headers = new HttpHeaders().set('ResponseType','text')   
  this.api.postReturn(`http://localhost:8084/api/v1/admin/createCategory`,catData,{headers}).subscribe((data:any)=>{   
    console.log("category added succesfully");
    this.openSuccessSnackbar('Category added succesfully!!');
        // const confirmation=confirm('category added succesfully')
      },(error: any)=>{
        console.log(error);
      })
  
}



}