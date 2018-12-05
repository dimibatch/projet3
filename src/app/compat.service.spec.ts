import { TestBed } from '@angular/core/testing';

import { CompatService } from './compat.service';

describe('CompatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompatService = TestBed.get(CompatService);
    expect(service).toBeTruthy();
  });
});
