import { Injectable } from '@angular/core';
import { filter, tap } from 'rxjs';
import { ActionType, TAction } from '../interfaces/t-action';
import { AuthService } from './auth.service';
import { DispatcherService } from './dispatcher.service';

@Injectable()
export class AuthMiddleware {

  constructor(
    private dispatcher: DispatcherService,
    private auth: AuthService
  ) {

    this.dispatcher.action$
      .subscribe(action => {
        if (action === null) return;

        if (action.type === ActionType.LOGIN_REQUEST) this.auth.connect(action.payload);
        if (action.type === ActionType.REGISTER_REQUEST) this.auth.login(action.payload);

      })


  }


}
