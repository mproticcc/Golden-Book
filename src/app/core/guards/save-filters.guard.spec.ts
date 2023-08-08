import { TestBed } from '@angular/core/testing';

import { SaveFiltersGuard } from './save-filters.guard';

describe('SaveFiltersGuard', () => {
  let guard: SaveFiltersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SaveFiltersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
