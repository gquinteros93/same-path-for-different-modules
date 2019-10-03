import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(mod => mod.LoginModule)
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
