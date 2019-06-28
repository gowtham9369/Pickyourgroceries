import { TestBed } from '@angular/core/testing';

import { AddinventoryService } from './addinventory.service';

describe('AddinventoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddinventoryService = TestBed.get(AddinventoryService);
    expect(service).toBeTruthy();
  });
});
