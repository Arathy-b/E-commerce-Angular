import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { DataserviceService } from '../../../dataservice.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  constructor(private dataService:DataserviceService){} 
   ngOnInit(): void {
    
  }
  showDefault(){
    this.dataService.notifyOther("default")

  }
  showListProduct(){
    console.log("kiomn");
    this.dataService.notifyOther("listProduct")
  }
  showListCategory() {
    console.log("kiomn");
    
    this.dataService.notifyOther("listCategory")
    }
    showorders(){
      this.dataService.notifyOther("orders")
    }
    showCustomers(){
      this.dataService.notifyOther("customers")
    }



}
