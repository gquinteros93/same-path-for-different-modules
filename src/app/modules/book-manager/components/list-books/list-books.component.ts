import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/models/book';
import { BookService } from 'src/app/shared/services/book.service';
import { FormGroup, Validators } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, FormlyFormBuilder } from '@ngx-formly/core';
import { namePattern } from 'src/app/shared/modules/my-ngx-formly/helpers/regex.helper';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent implements OnInit {
  public displayedColumns: string[];
  public addFlag: boolean;
  public form = new FormGroup({});
  public model: any = {};
  public options: FormlyFormOptions = {};
  public fields: FormlyFieldConfig[] = [];
  public get books$(): Observable<Book[]> {
    return this.bookService.getBooks();
  }
  constructor(private bookService: BookService, private builder: FormlyFormBuilder) {
    this.addFlag = false;
    this.displayedColumns = ['name', 'description', 'year'];
    this.builder.buildForm(this.form, this.fields, this.model, this.options);
  }

  ngOnInit(): void {
    this.fields = [
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          label: 'Name',
          placeholder: 'Name',
          required: true
        }
      },
      {
        key: 'description',
        type: 'input',
        templateOptions: {
          label: 'Description',
          placeholder: 'Description',
          required: true
        },
      },
      {
        key: 'year',
        type: 'input',
        templateOptions: {
          label: 'Year',
          placeholder: 'Year',
          required: true,
          max: ((new Date()).getFullYear() + 1),
          min: 0
        },
        validators: {
          validation: Validators.compose([Validators.required,
            Validators.pattern('^[1-9]+[0-9]*$')])
        }
      }
    ];
  }

  cancelAdd(): void {
    this.model = {};
    this.form.reset();
    this.addFlag = false;
  }

  addBook() {
    if (this.model) {
      this.bookService.addBook(this.model);
      this.addFlag = false;
    }
  }
}
