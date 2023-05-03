import { TestBed } from '@angular/core/testing';

import { EmailValidatinService } from './email-validatin.service';

describe('EmailValidatinService', () => {
  let service: EmailValidatinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailValidatinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
