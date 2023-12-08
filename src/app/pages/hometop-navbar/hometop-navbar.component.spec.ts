import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HometopNavbarComponent } from './hometop-navbar.component';

describe('HometopNavbarComponent', () => {
  let component: HometopNavbarComponent;
  let fixture: ComponentFixture<HometopNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HometopNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HometopNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
