import { TestBed } from '@angular/core/testing';

import { FakeDBService } from './fake-db.service';

describe('FakeDBService', () => {
  let service: FakeDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
