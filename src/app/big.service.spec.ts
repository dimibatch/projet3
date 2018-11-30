import { TestBed } from '@angular/core/testing';

import { BigService } from './big.service';

describe('BigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BigService = TestBed.get(BigService);
    expect(service).toBeTruthy();
  });
});
