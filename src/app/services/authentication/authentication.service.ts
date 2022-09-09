import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  setToken(token: string, rememberMe: boolean): void {
    rememberMe
      ? localStorage.setItem('access_token', token)
      : sessionStorage.setItem('access_token', token);
  }

  getToken(): string | null {
    const localStorageToken = localStorage.getItem('access_token');
    const sessionStorageToken = sessionStorage.getItem('access_token');
    return localStorageToken || sessionStorageToken || null;
  }

  deleteToken(): void {
    localStorage.removeItem('access_token');
    sessionStorage.removeItem('access_token');
  }

  isLoggedIn(): boolean {
    const localStorageToken = localStorage.getItem('access_token');
    const sessionStorageToken = sessionStorage.getItem('access_token');
    return localStorageToken || sessionStorageToken ? true : false;
  }
}
