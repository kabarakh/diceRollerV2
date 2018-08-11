import { TestBed, inject } from '@angular/core/testing';

import { AbstractStorageService } from './abstractStorage.service';

describe('AbstractStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbstractStorageService]
    });
  });

  it('should be created', inject([AbstractStorageService], (service: AbstractStorageService) => {
    expect(service).toBeTruthy();
  }));
});
