import { TestBed } from '@angular/core/testing';

import { FakebankService } from './fakebank.service';

describe('FakebankService', () => {
  let service: FakebankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakebankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
