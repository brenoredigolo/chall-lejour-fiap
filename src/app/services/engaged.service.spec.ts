import { TestBed } from '@angular/core/testing';

import { EngagedService } from './engaged.service';

describe('EngagedService', () => {
  let service: EngagedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EngagedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
