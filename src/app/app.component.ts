import { Component, Inject } from '@angular/core';
import { DispatcherService } from './core/services/dispatcher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    // @Inject(DispatcherService) public dispatcher:DispatcherService
    public dispatcher:DispatcherService
  ){
    console.warn('AppComponent', this.dispatcher)
  }
}
