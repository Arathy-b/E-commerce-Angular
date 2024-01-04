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
  showListProduct(){
    console.log("kiomn");
    this.dataService.notifyOther("listProduct")
  }
  showListCategory() {
    console.log("kiomn");
    
    this.dataService.notifyOther("listCategory")
    }


      showListCustomers() {
        console.log("kiomn");
        
        this.dataService.notifyOther("listCustomers")
        }
    

}
