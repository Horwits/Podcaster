/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomePrivateComponent } from './home-private.component';

describe('HomePrivateComponent', () => {
  let component: HomePrivateComponent;
  let fixture: ComponentFixture<HomePrivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePrivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
