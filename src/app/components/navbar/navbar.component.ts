import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiserviceService } from '../../apiservice.service';
import { error } from 'console';
import { Router, RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  customer:any
  username:any
  constructor(private api:ApiserviceService,private router:Router){}

  users: any[] = [];


  ngOnInit(): void {


    
    this.router.events.subscribe((value:any)=>{
      if(value.url){
        if(typeof localStorage!=="undefined" && localStorage.getItem("customer")){      
          this.customer=localStorage.getItem("customer")      
          this.username=JSON.parse(this.customer).name;
        }else{
          this.username=null
        }
      }
    })
  }

   


  logout(){
    this.api.getReturn(`${environment.BASE_API_URL}/auth/logout`).subscribe((data)=>{
      localStorage.removeItem("customer")
      localStorage.removeItem("token")
    this.router.navigate(['/login'])
    },(error)=>{
      console.log(error);
      
    })
  }
}
