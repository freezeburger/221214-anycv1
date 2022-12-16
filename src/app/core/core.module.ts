import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ANY_MENU_PROVIDER_TOKEN } from '@any';
import { AuthMiddleware } from './services/auth.middleware';
import { AuthService } from './services/auth.service';
import { DispatcherService } from './services/dispatcher.service';
import { NavigationService } from './services/navigation.service';



@NgModule({
  providers: [
    DispatcherService,
    NavigationService,
    AuthService,
    AuthMiddleware,
    {
      provide:ANY_MENU_PROVIDER_TOKEN,
      useExisting:NavigationService
    },
    {
      provide:APP_INITIALIZER,
      useValue:() => {
        // alert('Angular is ready no componentn are rendered yet')
        console.warn('All Initializations Done, application can start !');
        return Promise.resolve(false);
      },
      multi:true
    }
  ]
})
export class CoreModule {

  constructor(

    public dispatcher: DispatcherService,
    private auth:AuthService,
    private nav:NavigationService,

    // Middlewares
    private authMiddelware:AuthMiddleware,
  ) { 
    console.warn('CoreModule', this.dispatcher)
  }
  
}
