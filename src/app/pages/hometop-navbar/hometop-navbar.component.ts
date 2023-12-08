import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-hometop-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './hometop-navbar.component.html',
  styleUrl: './hometop-navbar.component.scss'
})
export class HometopNavbarComponent implements OnInit{
  constructor(private ds:DataserviceService){}
  ngOnInit(): void {
  }

  viewComponent(comp:any){
    this.ds.notifyOther(comp);
   
   }

}
