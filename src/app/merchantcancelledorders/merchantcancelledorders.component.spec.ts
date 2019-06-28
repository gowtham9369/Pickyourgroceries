import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantcancelledordersComponent } from './merchantcancelledorders.component';

describe('MerchantcancelledordersComponent', () => {
  let component: MerchantcancelledordersComponent;
  let fixture: ComponentFixture<MerchantcancelledordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantcancelledordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantcancelledordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
