import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminViewAreaComponent } from './admin-view-area/admin-view-area.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule,SidebarComponent,AdminViewAreaComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit{
  ngOnInit(): void {
    
  }

}
