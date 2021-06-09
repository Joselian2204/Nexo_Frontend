import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetasDialogComponent } from './betas-dialog.component';

describe('BetasDialogComponent', () => {
  let component: BetasDialogComponent;
  let fixture: ComponentFixture<BetasDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetasDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetasDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
