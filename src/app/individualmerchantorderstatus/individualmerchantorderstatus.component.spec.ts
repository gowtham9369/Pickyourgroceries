import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualmerchantorderstatusComponent } from './individualmerchantorderstatus.component';

describe('IndividualmerchantorderstatusComponent', () => {
  let component: IndividualmerchantorderstatusComponent;
  let fixture: ComponentFixture<IndividualmerchantorderstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualmerchantorderstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualmerchantorderstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
