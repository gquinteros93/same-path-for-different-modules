import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBooksComponent } from './display-books.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DisplayBooksComponent', () => {
  let component: DisplayBooksComponent;
  let fixture: ComponentFixture<DisplayBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayBooksComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
