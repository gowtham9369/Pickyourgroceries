import { TestBed } from '@angular/core/testing';

import { GetinventoryService } from './getinventory.service';

describe('GetinventoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetinventoryService = TestBed.get(GetinventoryService);
    expect(service).toBeTruthy();
  });
});
