import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsidebarComponent } from './notificationsidebar.component';

describe('NotificationsidebarComponent', () => {
  let component: NotificationsidebarComponent;
  let fixture: ComponentFixture<NotificationsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
