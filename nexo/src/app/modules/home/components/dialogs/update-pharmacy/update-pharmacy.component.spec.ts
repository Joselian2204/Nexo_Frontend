import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePharmacyComponent } from './update-pharmacy.component';

describe('UpdatePharmacyComponent', () => {
  let component: UpdatePharmacyComponent;
  let fixture: ComponentFixture<UpdatePharmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePharmacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
