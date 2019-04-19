import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentCheckupPage } from './recent-checkup.page';

describe('RecentCheckupPage', () => {
  let component: RecentCheckupPage;
  let fixture: ComponentFixture<RecentCheckupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentCheckupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentCheckupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
