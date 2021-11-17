import { TestBed } from '@angular/core/testing';

import { AvionService } from './Avion.service';

describe('AvionService', () => {
  let service: AvionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
