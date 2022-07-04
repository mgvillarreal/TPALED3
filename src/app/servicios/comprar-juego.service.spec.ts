import { TestBed } from '@angular/core/testing';

import { ComprarJuegoService } from './comprar-juego.service';

describe('ComprarJuegoService', () => {
  let service: ComprarJuegoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComprarJuegoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
