import { TestBed } from '@angular/core/testing';

import { AuthJuegosService } from './auth-juegos.service';

describe('AuthJuegosService', () => {
  let service: AuthJuegosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthJuegosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
