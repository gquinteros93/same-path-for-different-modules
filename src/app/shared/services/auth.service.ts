import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authorized$: Observable<boolean>;
  private authorizedSource: BehaviorSubject<boolean>;
  constructor() {
    this.authorizedSource = new BehaviorSubject<boolean>(false);
    this.authorized$ = this.authorizedSource.asObservable();
  }
  public isAuthorized(): boolean {
    return this.authorizedSource.value;
  }
  public setAuthorized(value: boolean): void {
    this.authorizedSource.next(value);
  }
}
