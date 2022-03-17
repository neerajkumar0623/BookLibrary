import { TestBed } from '@angular/core/testing';

import { CareGuard } from './care.guard';

describe('CareGuard', () => {
  let guard: CareGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CareGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
