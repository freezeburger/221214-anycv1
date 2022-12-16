import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AnyMenu, AnyMenuProvider, AnyRoute } from '@any';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable()
export class NavigationService implements AnyMenuProvider, CanActivate, CanDeactivate<any> {


  menu$ = new BehaviorSubject<AnyMenu>([]);

  constructor(
    private auth: AuthService,
    private router: Router
  ) {

    const routes: AnyMenu = this.router.config
      .filter(route => route.path && route.path != '**')
      // .filter( route => !this.auth.isAuth() && route.path !== 'message' )
      .map(({ path = '' }) => ({ path, label: path.toUpperCase() }))
    // .concat( { path: 'login', label: 'New user ? Login now !' })

    if (!this.auth.isAuth()) routes.push({ path: 'login', label: 'New user ? Login now !' })

    this.menu$.next(routes);

    if (!this.auth.isAuth()) this.router.navigateByUrl('/login')
  }

  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (currentRoute.routeConfig?.path === 'login') return this.auth.isAuth();
    return true;
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.auth.isAuth();
  }

}
