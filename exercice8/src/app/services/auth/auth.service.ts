import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogged: boolean = false;

  constructor() {}

  login(): Promise<any> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        this.isLogged = true;
        res('');
      }, 500);
    });
  }
}
