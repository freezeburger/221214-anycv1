import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FState } from '../interfaces/f-state';
import { TAction } from '../interfaces/t-action';
import { TDispatcher } from '../interfaces/t-dispatcher';
import { TError } from '../interfaces/t-error';

@Injectable()
export class DispatcherService implements TDispatcher<FState>{

  private _state: FState = {
    connected: false,
    messages: [],
    news: [],
    newsSearch: null,
    online: true
  }

  state$ = new BehaviorSubject<FState>(this._state);
  action$ = new BehaviorSubject<TAction | null >(null);

  constructor() {
  }

  dispatch(action: TAction): TError | null {
    console.table(action);
    this.action$.next(action);
    return null;
  }

}

/* 
export class DispatcherService {


  state$ = new BehaviorSubject<{ time: number }>({ time: Date.now() })

  constructor() {
    setInterval(this.tick, 1000)
  }

  tick = () => {
    this.state$.next({ time: Date.now() })
  }


} */