import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiserviceService } from '../../apiservice.service';
import { RouterModule } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  customer: any = {};
 
  constructor(private api: ApiserviceService) {}
 
  ngOnInit() {
   
    const apiUrl=`http://localhost:8084/api/v1/customer/getCustomerDetails`;
    const customerData = '';
 
    this.api.getReturn(apiUrl, customerData).subscribe((customerData: any) => {
      this.customer = customerData;
      console.log(customerData);
      
    });
  }
}

