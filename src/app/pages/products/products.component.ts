import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from '../../apiservice.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  catId:any
  products:any[]=[]
  constructor(private activeRoute:ActivatedRoute,private api:ApiserviceService,private router:Router){}
  ngOnInit(): void {
    this.activeRoute.params.subscribe(s => {
      this.catId=s["catId"]
    });
    this.getProductsByCat()
  }
  getProductsByCat(){
    this.api.getReturn(`http://localhost:8084/products/category/${this.catId}`).subscribe((data:any)=>{
      this.products=data
    },(error)=>console.log(error))
  }
  showDetails(prodId:any){
    this.router.navigate([`productdetails/${prodId}`])
  }
}
