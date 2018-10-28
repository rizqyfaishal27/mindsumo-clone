import { TestBed } from '@angular/core/testing';

import { ChallengeServiceService } from './challenge-service.service';

describe('ChallengeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChallengeServiceService = TestBed.get(ChallengeServiceService);
    expect(service).toBeTruthy();
  });
});
