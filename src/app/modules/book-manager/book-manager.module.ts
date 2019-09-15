import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ListBooksComponent],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild([{path: '', component: ListBooksComponent}])
  ]
})
export class BookManagerModule { }
