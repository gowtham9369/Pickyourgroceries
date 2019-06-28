import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductstatusnotificationComponent } from './productstatusnotification.component';

describe('ProductstatusnotificationComponent', () => {
  let component: ProductstatusnotificationComponent;
  let fixture: ComponentFixture<ProductstatusnotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductstatusnotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductstatusnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
