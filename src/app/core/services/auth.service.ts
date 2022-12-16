import { Injectable } from '@angular/core';
import { FCredentials } from '../interfaces/f-credentials';
import { TAction } from '../interfaces/t-action';

@Injectable()
export class AuthService {

  // LHS = RHS
  private accessToken: string | null = null;

  constructor() {
    this.restoreToken();
  }

  public isAuth(): boolean {
    return this.accessToken !== null && String(this.accessToken).length > 0;
  }

  public login(credentials: FCredentials) {
    console.table(credentials)
  }

  public connect(credentials: FCredentials) {
    console.table(credentials)
  }

  private persistToken() {
    if (this.accessToken === null || !this.accessToken) return;
    window.localStorage.setItem('TOKEN', this.accessToken);
  }

  private restoreToken() {
    const restoredToken = window.localStorage.getItem('TOKEN');
    if (restoredToken === null || !restoredToken) return;
    this.accessToken = restoredToken;
  }
}
