import { TestBed } from '@angular/core/testing';

import { RutaService } from './Ruta.service';

describe('RutaService', () => {
  let service: RutaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RutaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
