import { TestBed } from '@angular/core/testing';

import { PollUsersService } from './poll-users.service';

describe('PollUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PollUsersService = TestBed.get(PollUsersService);
    expect(service).toBeTruthy();
  });
});
