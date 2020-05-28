import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BookService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    schemas: [NO_ERRORS_SCHEMA],
  }));

  it('should be created', () => {
    const service: BookService = TestBed.inject(BookService);
    expect(service).toBeTruthy();
  });
});
