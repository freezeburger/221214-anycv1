import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AnyMenu } from './interfaces/any-menu';
import { AnyMenuProvider } from './interfaces/any-menu-provider';

@Injectable({
  providedIn: 'root'
})
export class DefaultNavigationService implements AnyMenuProvider {
 
  menu$ =  new BehaviorSubject<AnyMenu>([
    {
      label:'No navigation provided',
      path:''
    }
  ]);

}
