/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UnplayedComponent } from './unplayed.component';

describe('UnplayedComponent', () => {
  let component: UnplayedComponent;
  let fixture: ComponentFixture<UnplayedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnplayedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnplayedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
