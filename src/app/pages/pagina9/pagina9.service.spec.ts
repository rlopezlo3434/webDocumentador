import { TestBed } from '@angular/core/testing';

import { Pagina9Service } from './pagina9.service';

describe('Pagina9Service', () => {
  let service: Pagina9Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pagina9Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
