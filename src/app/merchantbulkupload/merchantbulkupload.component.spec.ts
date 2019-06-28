import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantbulkuploadComponent } from './merchantbulkupload.component';

describe('MerchantbulkuploadComponent', () => {
  let component: MerchantbulkuploadComponent;
  let fixture: ComponentFixture<MerchantbulkuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantbulkuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantbulkuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
