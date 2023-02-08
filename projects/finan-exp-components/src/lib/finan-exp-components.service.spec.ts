import { TestBed } from '@angular/core/testing';

import { FinanEXPComponentsService } from './finan-exp-components.service';

describe('FinanEXPComponentsService', () => {
  let service: FinanEXPComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinanEXPComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
