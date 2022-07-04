import { TestBed } from '@angular/core/testing';

import { JuegosGuard } from './juegos.guard';

describe('JuegosGuard', () => {
  let guard: JuegosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(JuegosGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
