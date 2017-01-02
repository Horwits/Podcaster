/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TopEightComponent } from './top-eight.component';

describe('TopEightComponent', () => {
  let component: TopEightComponent;
  let fixture: ComponentFixture<TopEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
