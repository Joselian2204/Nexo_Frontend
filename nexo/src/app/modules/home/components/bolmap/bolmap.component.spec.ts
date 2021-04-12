import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolmapComponent } from './bolmap.component';

describe('BolmapComponent', () => {
  let component: BolmapComponent;
  let fixture: ComponentFixture<BolmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
