import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: BehaviorSubject<string>;

  constructor() {
    this.token = new BehaviorSubject<string>('');
  }

  /**
   * try to log the user
   * @param email
   * @param password
   */
  signIn(email: string, password: string): Promise<void> {
    return new Promise<void>((res, rej) => {
      if (email === 'contact@me.cr' && password === 'azerty') {
        this.token.next('hohronhonhq');
        res();
      } else {
        rej('Identifiants incorrects my friend!');
      }
    });
  }
  signOut(): Promise<void> {
    return new Promise<void>((res, rej) => {
      this.token.next('');
      res();
    });
  }
}
