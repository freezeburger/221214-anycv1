import { Component, inject } from '@angular/core';
import { DispatcherService } from 'src/app/core/services/dispatcher.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent {

  dispatcher = inject(DispatcherService);

}
