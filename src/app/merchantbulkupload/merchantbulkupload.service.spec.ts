import { TestBed } from '@angular/core/testing';

import { MerchantbulkuploadService } from './merchantbulkupload.service';

describe('MerchantbulkuploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MerchantbulkuploadService = TestBed.get(MerchantbulkuploadService);
    expect(service).toBeTruthy();
  });
});
