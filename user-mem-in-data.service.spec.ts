import { TestBed } from '@angular/core/testing';

import { UserMemInDataService } from './user-mem-in-data.service';

describe('UserMemInDataService', () => {
  let service: UserMemInDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserMemInDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
