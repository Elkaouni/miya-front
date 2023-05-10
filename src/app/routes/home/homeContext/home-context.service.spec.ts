import { TestBed } from '@angular/core/testing';

import { HomeContextService } from './home-context.service';

describe('HomeContextService', () => {
  let service: HomeContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
