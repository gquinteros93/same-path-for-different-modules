import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { bookManagerMatcher } from '../../shared/matchers/book-manager.matcher';
import { bookConsumerMatcher } from '../../shared/matchers/book-consumer.matcher';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        matcher: (url, group, route) => bookManagerMatcher(url, group, route),
        loadChildren: () => import('../book-manager/book-manager.module').then(mod => mod.BookManagerModule)
      },
      {
        matcher: (url, group, route) => bookConsumerMatcher(url, group, route),
        loadChildren: () => import('../book-consumer/book-consumer.module').then(mod => mod.BookConsumerModule)
      }
    ])
  ]
})
export class BookHandlerModule { }
