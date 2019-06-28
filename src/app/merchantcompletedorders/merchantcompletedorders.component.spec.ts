import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantcompletedordersComponent } from './merchantcompletedorders.component';

describe('MerchantcompletedordersComponent', () => {
  let component: MerchantcompletedordersComponent;
  let fixture: ComponentFixture<MerchantcompletedordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantcompletedordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantcompletedordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
