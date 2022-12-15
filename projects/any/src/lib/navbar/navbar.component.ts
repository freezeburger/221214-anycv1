import { Component, Inject, Optional } from '@angular/core';
import { ANY_MENU_PROVIDER_TOKEN } from '../any.tokens';
import { AnyMenuProvider } from '../interfaces/any-menu-provider';

@Component({
  selector: 'any-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
    @Optional() @Inject(ANY_MENU_PROVIDER_TOKEN) public menuProvider:AnyMenuProvider
  ){}

}
