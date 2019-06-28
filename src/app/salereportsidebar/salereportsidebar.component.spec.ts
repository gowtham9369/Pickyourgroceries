import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalereportsidebarComponent } from './salereportsidebar.component';

describe('SalereportsidebarComponent', () => {
  let component: SalereportsidebarComponent;
  let fixture: ComponentFixture<SalereportsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalereportsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalereportsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
