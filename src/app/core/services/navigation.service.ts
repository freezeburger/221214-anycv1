import { Injectable } from '@angular/core';
import { AnyMenu, AnyMenuProvider } from '@any';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NavigationService implements AnyMenuProvider {

  
  menu$ = new BehaviorSubject<AnyMenu>([
    {
      path:'home',
      label:'Home Page',
    },
    {
      path:'login',
      label:'Login Page',
    }
  ]);

  constructor() { }

  
}
