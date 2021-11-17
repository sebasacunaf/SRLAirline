import { TestBed } from '@angular/core/testing';

import { TipoAvionService } from './TipoAvion.service';

describe('TipoAvionService', () => {
  let service: TipoAvionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoAvionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
