import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomfiltersComponent } from './customfilters.component';

describe('CustomfiltersComponent', () => {
  let component: CustomfiltersComponent;
  let fixture: ComponentFixture<CustomfiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomfiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomfiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
