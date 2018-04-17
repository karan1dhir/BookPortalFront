import { TestBed, inject } from '@angular/core/testing';

import { CartdetailsService } from './cartdetails.service';

describe('CartdetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartdetailsService]
    });
  });

  it('should be created', inject([CartdetailsService], (service: CartdetailsService) => {
    expect(service).toBeTruthy();
  }));
});
