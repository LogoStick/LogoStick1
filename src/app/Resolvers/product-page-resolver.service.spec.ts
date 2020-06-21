import { TestBed } from '@angular/core/testing';

import { ProductPageResolverService } from './product-page-resolver.service';

describe('ProductPageResolverService', () => {
  let service: ProductPageResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductPageResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
