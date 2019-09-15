import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authorized: boolean;
  constructor() {
    this.authorized = false;
  }
  isAuthorized(): boolean {
    return this.authorized;
  }
}
