import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/models/book';
import { BookService } from 'src/app/shared/services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent implements OnInit, OnDestroy {
  public books$: Observable<Book[]>;
  public displayedColumns: string[] = ['name', 'description', 'year'];
  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit() {
    this.books$ = this.bookService.getBooks();
  }
  ngOnDestroy() {
    const i = this.router.config.findIndex(x => x.path === 'books');
    this.router.config.splice(i, 1);
    this.router.config.push(
      {path: 'books', loadChildren: () => import('../../../book-handler/book-handler.module').then(mod => mod.BookHandlerModule)}
    );
  }
}
