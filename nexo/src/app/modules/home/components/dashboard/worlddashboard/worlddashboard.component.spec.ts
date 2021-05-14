import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorlddashboardComponent } from './worlddashboard.component';

describe('WorlddashboardComponent', () => {
  let component: WorlddashboardComponent;
  let fixture: ComponentFixture<WorlddashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorlddashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorlddashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
