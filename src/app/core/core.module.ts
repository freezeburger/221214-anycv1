import { APP_INITIALIZER, NgModule, PLATFORM_INITIALIZER } from '@angular/core';
import { ANY_MENU_PROVIDER_TOKEN } from '@any';
import { DispatcherService } from './services/dispatcher.service';
import { NavigationService } from './services/navigation.service';



@NgModule({
  providers: [
    DispatcherService,
    NavigationService,
    {
      provide:ANY_MENU_PROVIDER_TOKEN,
      useExisting:NavigationService
    },
    {
      provide:APP_INITIALIZER,
      useValue:() => {
        console.warn('All Initializations Done, application can start !');
        return Promise.resolve(false);
      },
      multi:true
    }
  ]
})
export class CoreModule {

  constructor(
    public dispatcher: DispatcherService
  ) { 
    console.warn('CoreModule', this.dispatcher)
  }
  
}
