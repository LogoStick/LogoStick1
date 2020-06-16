import { TestBed } from '@angular/core/testing';

import { ProductsFakeDBService } from './products-fake-db.service';

describe('ProductsFakeDBService', () => {
  let service: ProductsFakeDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsFakeDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
