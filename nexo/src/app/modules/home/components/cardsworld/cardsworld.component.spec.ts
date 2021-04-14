import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsworldComponent } from './cardsworld.component';

describe('CardsworldComponent', () => {
  let component: CardsworldComponent;
  let fixture: ComponentFixture<CardsworldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsworldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsworldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
