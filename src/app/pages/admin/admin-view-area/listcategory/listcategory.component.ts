import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiserviceService } from '../../../../apiservice.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { error } from 'console';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Category } from '../../../../models/data-types';

@Component({
  selector: 'app-listcategory',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './listcategory.component.html',
  styleUrl: './listcategory.component.scss'
})
export class ListcategoryComponent implements OnInit {
  catData:any
  addCategory: FormGroup|any;

  constructor(  private http:HttpClient,
    private api:ApiserviceService,
    private router:Router,
    private snackBar: MatSnackBar,
    private fb:FormBuilder){}
    openSuccessSnackbar(message: string): void {
      this.snackBar.open(message, 'Close', {
        duration: 1000,
        verticalPosition: 'bottom',
        panelClass: ['custom-snackbar'],
      });
    }
 
  ngOnInit(): void {
    this.api.getReturn(`http://localhost:8084/api/v1/admin/listCategory`).subscribe((data:any)=>{
      console.log(data);
      this.catData=data;
      this.addCategory=this.fb.group({
        name:['',[]]
      })
    
      
    },(error)=>{
      console.error(error);
      

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
    
    
    onAddCategory(){
  
    }
    
  }


