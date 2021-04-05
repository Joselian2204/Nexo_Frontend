import { TestBed } from '@angular/core/testing';

import { NavbarComponentService } from './navbar-component.service';

describe('NavbarComponentService', () => {
  let service: NavbarComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
