import { TestBed, inject } from '@angular/core/testing';

import { DatacomService } from './datacom.service';

describe('DatacomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatacomService]
    });
  });

  it('should be created', inject([DatacomService], (service: DatacomService) => {
    expect(service).toBeTruthy();
  }));
});
