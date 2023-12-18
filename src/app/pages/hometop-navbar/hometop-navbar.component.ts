import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-hometop-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './hometop-navbar.component.html',
  styleUrl: './hometop-navbar.component.scss'
})
export class HometopNavbarComponent implements OnInit{
  @Input() catList:any[]=[]

  constructor(private ds:DataserviceService,private router:Router){}
  ngOnInit(): void {
    
  }
  showCatProducts(catId:number){
    this.router.navigate([`products/${catId}`])
  }

  viewComponent(comp:any){
    this.ds.notifyOther(comp);
   
   }

}
