import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoliviadashboardComponent } from './boliviadashboard.component';

describe('BoliviadashboardComponent', () => {
  let component: BoliviadashboardComponent;
  let fixture: ComponentFixture<BoliviadashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoliviadashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoliviadashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
