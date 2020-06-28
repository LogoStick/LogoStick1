import { TestBed } from '@angular/core/testing';

import { NotFoundProductGuard } from './not-found-product.guard';

describe('NotFoundProductGuard', () => {
  let guard: NotFoundProductGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotFoundProductGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
