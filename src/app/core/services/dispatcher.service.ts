import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DispatcherService {

  /**
   * This is the main Observable to expose the Application State towards the components.
   */
  state$ = new BehaviorSubject<{ time: number }>({ time: Date.now() })

  constructor() {
    setInterval(this.tick, 1000)
  }

  tick = () => {
    this.state$.next({ time: Date.now() })
  }


}
