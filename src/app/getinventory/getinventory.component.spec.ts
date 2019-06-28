import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetinventoryComponent } from './getinventory.component';

describe('GetinventoryComponent', () => {
  let component: GetinventoryComponent;
  let fixture: ComponentFixture<GetinventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetinventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
