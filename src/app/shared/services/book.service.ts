import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { BOOKS } from '../constants/data-keys';
import { saveData, getData } from '../helper/local-storage.helper';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() {
    this.createInitialData();
  }

  public getBooks(): Observable<Book[]> {
    return of(getData(BOOKS));
  }

  private createInitialData(): void {
    const books: Book[] = [
      { name: 'Hamlet', description: 'It is a tragedy written by William Shakespeare', year: 1601},
      { name: 'Divine Comedy', description: 'It is a long Italian narrative poem by Dante Alighieri', year: 1320},
      { name: 'Of Love and Other Demons', description: 'It is a novel by Colombian author Gabriel García Márquez', year: 1994}
    ];
    saveData(BOOKS, books);
  }
}
