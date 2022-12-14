import { NgModule } from '@angular/core';
import { DispatcherService } from './services/dispatcher.service';



@NgModule({
  providers: [
    DispatcherService
  ]
})
export class CoreModule {
  constructor(
    public dispatcher: DispatcherService
  ) { 
    console.warn('CoreModule', this.dispatcher)
  }
}
