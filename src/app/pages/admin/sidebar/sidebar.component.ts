import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DataserviceService } from '../../../dataservice.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
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

}
