import { TestBed } from '@angular/core/testing';

import { HttpContactoService } from './http-contacto.service';

describe('HttpContactoService', () => {
  let service: HttpContactoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpContactoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
