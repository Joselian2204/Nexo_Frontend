import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHospitalComponent } from './delete-hospital.component';

describe('DeleteHospitalComponent', () => {
  let component: DeleteHospitalComponent;
  let fixture: ComponentFixture<DeleteHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteHospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
