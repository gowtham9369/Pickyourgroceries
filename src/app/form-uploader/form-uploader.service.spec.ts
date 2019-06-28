import { TestBed } from '@angular/core/testing';

import { FormUploaderService } from './form-uploader.service';

describe('FormUploaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormUploaderService = TestBed.get(FormUploaderService);
    expect(service).toBeTruthy();
  });
});
