import { NgModule } from '@angular/core';
import { LayoutDefaultComponent } from './layout-default/layout-default.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LayoutDefaultComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    LayoutDefaultComponent
  ]
})
export class LayoutsModule { }
