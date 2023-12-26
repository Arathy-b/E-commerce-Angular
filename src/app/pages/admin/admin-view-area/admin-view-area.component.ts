import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataserviceService } from '../../../dataservice.service';
import { ListProductComponent } from './list-product/list-product.component';
import { ListcategoryComponent } from "./listcategory/listcategory.component";



@Component({
    selector: 'app-admin-view-area',
    standalone: true,
    templateUrl: './admin-view-area.component.html',
    styleUrl: './admin-view-area.component.scss',
    imports: [CommonModule, ListProductComponent, ListcategoryComponent]
})
export class AdminViewAreaComponent  implements OnInit{
  constructor(private dataService:DataserviceService){}
  showWhat:string=''

  ngOnInit(): void {
    this.dataService.notifyObservale$.subscribe((data)=>{
      this.showWhat=data
      console.log(this.showWhat);
      
    })
  }

}
