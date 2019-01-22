import { TestBed } from '@angular/core/testing';

import { CompatReverseService } from './compat-reverse.service';

describe('CompatReverseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompatReverseService = TestBed.get(CompatReverseService);
    expect(service).toBeTruthy();
  });
});
