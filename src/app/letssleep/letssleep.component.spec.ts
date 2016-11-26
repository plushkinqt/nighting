/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LetsSleepComponent } from './letssleep.component';

describe('LetsSleepComponent', () => {
  let component: LetsSleepComponent;
  let fixture: ComponentFixture<LetsSleepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetsSleepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetsSleepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
