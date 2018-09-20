import { TestBed, inject } from '@angular/core/testing';

import { TedRestService } from './ted-rest.service';

describe('TedRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TedRestService]
    });
  });

  it('should be created', inject([TedRestService], (service: TedRestService) => {
    expect(service).toBeTruthy();
  }));
});
