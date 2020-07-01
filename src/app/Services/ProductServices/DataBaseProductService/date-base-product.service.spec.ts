import { TestBed } from '@angular/core/testing';

import { DateBaseProductService } from './date-base-product.service';

describe('DateBaseProductService', () => {
  let service: DateBaseProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateBaseProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
