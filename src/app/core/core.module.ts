import { NgModule } from '@angular/core';
import { DispatcherService } from './services/dispatcher.service';
import { NavigationService } from './services/navigation.service';



@NgModule({
  providers: [
    DispatcherService,
    NavigationService
  ]
})
export class CoreModule {

  constructor(
    public dispatcher: DispatcherService
  ) { 
    console.warn('CoreModule', this.dispatcher)
  }
  
}
