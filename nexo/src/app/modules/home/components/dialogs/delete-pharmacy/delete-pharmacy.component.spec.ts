import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePharmacyComponent } from './delete-pharmacy.component';

describe('DeletePharmacyComponent', () => {
  let component: DeletePharmacyComponent;
  let fixture: ComponentFixture<DeletePharmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePharmacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
