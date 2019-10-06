import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/models/book';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent {
  public displayedColumns: string[] = ['name', 'description', 'year'];
  public get books$(): Observable<Book[]> {
    return this.bookService.getBooks();
  }
  constructor(private bookService: BookService) {
  }
}
