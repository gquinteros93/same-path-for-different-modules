import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [{
      provide: ROUTES,
      useFactory: configBookHandlerRoutes,
      deps: [AuthService]
    }
  ]
})


export class BookHandlerModule {}

export function configBookHandlerRoutes(authService: AuthService) {
  let routes: Routes = [];
  if (authService.isAuthorized()) {
    routes = [
      {path: '', loadChildren: () => import('../book-manager/book-manager.module').then(mod => mod.BookManagerModule)}
    ];
  } else {
    routes = [
      {path: '', loadChildren: () => import('../book-consumer/book-consumer.module').then(mod => mod.BookConsumerModule)}
    ];
  }
  return routes;
}
