import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AnyMenu, AnyMenuProvider, AnyRoute } from '@any';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NavigationService implements AnyMenuProvider {


  menu$ = new BehaviorSubject<AnyMenu>([]);

  constructor(private router: Router) {

    const routes: AnyMenu = this.router.config
      .filter(route => route.path && route.path != '**')
      .map(({ path = '' }) => ({ path, label: path.toUpperCase() }))
      .concat({ path: 'login', label: 'New user ? Login now !' })

    this.menu$.next(routes);
  }

}
