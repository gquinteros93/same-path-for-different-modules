import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    loadChildren: () => import('./modules/book-handler/book-handler.module').then(mod => mod.BookHandlerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
