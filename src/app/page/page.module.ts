import { NgModule } from '@angular/core';
import { LayoutsModule } from '../layouts/layouts.module';
import { FeaturesModule } from '../features/features.module';
import { SharedModule } from '../shared/shared.module';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageNewsComponent } from './page-news/page-news.component';
import { PageMessageComponent } from './page-message/page-message.component';



@NgModule({
  declarations: [
    PageHomeComponent,
    PageLoginComponent,
    PageNewsComponent,
    PageMessageComponent
  ],
  imports: [
    SharedModule,
    LayoutsModule,
    FeaturesModule
  ],
  exports: [
    PageHomeComponent,
    PageLoginComponent,
    PageNewsComponent,
    PageMessageComponent
  ]
})
export class PageModule { }
