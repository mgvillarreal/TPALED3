import { TestBed } from '@angular/core/testing';

import { RegistradosService } from './registrados.service';

describe('RegistradosService', () => {
  let service: RegistradosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistradosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
