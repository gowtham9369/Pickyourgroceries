import { TestBed } from '@angular/core/testing';

import { IndividualmerchantorderstatusService } from './individualmerchantorderstatus.service';

describe('IndividualmerchantorderstatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndividualmerchantorderstatusService = TestBed.get(IndividualmerchantorderstatusService);
    expect(service).toBeTruthy();
  });
});
