import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentsComponent } from './departaments.component';

describe('DepartamentsComponent', () => {
  let component: DepartamentsComponent;
  let fixture: ComponentFixture<DepartamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
