import { Component, Inject, Injector, Optional, Self, SkipSelf } from '@angular/core';
import { ANY_MENU_PROVIDER_TOKEN } from '../any.tokens';
import { DefaultNavigationService } from '../default-navigation.service';
import { AnyMenuProvider } from '../interfaces/any-menu-provider';

@Component({
  selector: 'any-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[
    DefaultNavigationService,
    {
      provide:ANY_MENU_PROVIDER_TOKEN,
      useExisting:DefaultNavigationService
    }
  ]
})
export class NavbarComponent {

  constructor(
    @Optional() @SkipSelf()  @Inject(ANY_MENU_PROVIDER_TOKEN) public menuProvider:AnyMenuProvider,
    @Self()  @Inject(ANY_MENU_PROVIDER_TOKEN) public defaultMenuProvider:AnyMenuProvider
  ){
    if( !menuProvider ) this.menuProvider = defaultMenuProvider ;
  }

}
