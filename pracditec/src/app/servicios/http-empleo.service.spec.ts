import { TestBed } from '@angular/core/testing';

import { HttpEmpleoService } from './http-empleo.service';

describe('HttpEmpleoService', () => {
  let service: HttpEmpleoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpEmpleoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
