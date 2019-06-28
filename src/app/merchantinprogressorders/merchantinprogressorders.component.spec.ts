import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantinprogressordersComponent } from './merchantinprogressorders.component';

describe('MerchantinprogressordersComponent', () => {
  let component: MerchantinprogressordersComponent;
  let fixture: ComponentFixture<MerchantinprogressordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantinprogressordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantinprogressordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
