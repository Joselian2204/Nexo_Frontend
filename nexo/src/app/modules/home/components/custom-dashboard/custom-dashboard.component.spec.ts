import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDashboardComponent } from './custom-dashboard.component';

describe('CustomDashboardComponent', () => {
  let component: CustomDashboardComponent;
  let fixture: ComponentFixture<CustomDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
