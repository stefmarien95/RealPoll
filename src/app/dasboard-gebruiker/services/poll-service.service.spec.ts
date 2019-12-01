import { TestBed } from '@angular/core/testing';

import { PollService } from './poll-service.service';

describe('PollServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PollService = TestBed.get(PollService);
    expect(service).toBeTruthy();
  });
});
