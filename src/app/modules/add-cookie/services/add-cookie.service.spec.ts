import { TestBed } from '@angular/core/testing';

import { AddCookieService } from './add-cookie.service';

describe('AddCookieService', () => {
  let service: AddCookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddCookieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
