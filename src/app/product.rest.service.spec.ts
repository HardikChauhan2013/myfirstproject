import { TestBed } from '@angular/core/testing';

import { Product.RestService } from './product.rest.service';

describe('Product.RestService', () => {
  let service: Product.RestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Product.RestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
