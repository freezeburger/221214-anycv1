import { TestBed } from '@angular/core/testing';

import { DefaultNavigationService } from './default-navigation.service';

describe('DefaultNavigationService', () => {
  let service: DefaultNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefaultNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
