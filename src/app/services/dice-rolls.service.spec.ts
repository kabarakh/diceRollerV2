import { TestBed, inject } from '@angular/core/testing';

import { DiceRollsService } from './dice-rolls.service';

describe('DiceRollsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiceRollsService]
    });
  });

  it('should be created', inject([DiceRollsService], (service: DiceRollsService) => {
    expect(service).toBeTruthy();
  }));
});
