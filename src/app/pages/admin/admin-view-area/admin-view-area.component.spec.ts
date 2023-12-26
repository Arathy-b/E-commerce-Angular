import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAreaComponent } from './admin-view-area.component';

describe('AdminViewAreaComponent', () => {
  let component: AdminViewAreaComponent;
  let fixture: ComponentFixture<AdminViewAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminViewAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminViewAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
