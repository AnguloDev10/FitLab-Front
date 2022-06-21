import { TestBed } from '@angular/core/testing';

import { NutrivService } from './nutriv.service';

describe('NutrivService', () => {
  let service: NutrivService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NutrivService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
