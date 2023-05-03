import { TestBed } from '@angular/core/testing';

import { PasswordValidatinService } from './password-validatin.service';

describe('PasswordValidatinService', () => {
  let service: PasswordValidatinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordValidatinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
