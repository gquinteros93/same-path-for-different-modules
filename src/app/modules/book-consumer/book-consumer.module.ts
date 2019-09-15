import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayBooksComponent } from './components/display-books/display-books.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DisplayBooksComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: DisplayBooksComponent}])
  ]
})
export class BookConsumerModule { }
