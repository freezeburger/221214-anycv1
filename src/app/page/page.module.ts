import { NgModule } from '@angular/core';
import { LayoutsModule } from '../layouts/layouts.module';
import { FeaturesModule } from '../features/features.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    LayoutsModule,
    FeaturesModule
  ]
})
export class PageModule { }
