import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNotificationPage } from './app-notification.page';

describe('AppNotificationPage', () => {
  let component: AppNotificationPage;
  let fixture: ComponentFixture<AppNotificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNotificationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNotificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
