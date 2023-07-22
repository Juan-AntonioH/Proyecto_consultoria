import { TestBed } from '@angular/core/testing';

import { HttpNewsletterService } from './http-newsletter.service';

describe('HttpNewsletterService', () => {
  let service: HttpNewsletterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpNewsletterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
