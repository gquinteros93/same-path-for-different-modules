import { NgModule, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    {
      provide: ROUTES,
      useFactory: configBookHandlerRoutes,
      deps: [AuthService],
      multi: true
    }
  ]
})


export class BookHandlerModule implements OnInit, OnDestroy {
  // tslint:disable-next-line: contextual-lifecycle
  ngOnInit() {
    console.log('HELLO  BookHandlerModule');
  }
  // tslint:disable-next-line: contextual-lifecycle
  ngOnDestroy() {
    console.log('BYE  BookHandlerModule');
  }
}

export function configBookHandlerRoutes(authService: AuthService) {
  let routes: Routes = [];
  if (authService.isAuthorized()) {
    routes = [
      {
        path: '', loadChildren: () => import('../book-manager/book-manager.module').then(mod => mod.BookManagerModule)
      }
    ];
  } else {
    routes = [
      {
        path: '', loadChildren: () => import('../book-consumer/book-consumer.module').then(mod => mod.BookConsumerModule)
      }
    ];
  }
  return routes;
}
