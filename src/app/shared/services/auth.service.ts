import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authorized$: Observable<boolean>;
  private authorizedSource: BehaviorSubject<boolean>;
  constructor(private router: Router) {
    this.authorizedSource = new BehaviorSubject<boolean>(false);
    this.authorized$ = this.authorizedSource.asObservable();
  }

  public isAuthorized(): boolean {
    return this.authorizedSource.value;
  }

  public setAuthorized(value: boolean): void {
    this.authorizedSource.next(value);
    const i = this.router.config.findIndex(x => x.path === 'books');
    this.router.config.splice(i, 1);
    this.router.config.push(
      {path: 'books', loadChildren: () => import('../../modules/book-handler/book-handler.module').then(mod => mod.BookHandlerModule)}
    );
  }
}
