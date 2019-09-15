import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/models/book';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent implements OnInit {
  public books$: Observable<Book[]>;
  public displayedColumns: string[] = ['name', 'description', 'year'];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books$ = this.bookService.getBooks();
  }

}
