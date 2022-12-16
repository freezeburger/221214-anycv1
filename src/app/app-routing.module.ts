import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationService } from './core/services/navigation.service';

import { PageHomeComponent } from './page/page-home/page-home.component';
import { PageLoginComponent } from './page/page-login/page-login.component';
import { PageMessageComponent } from './page/page-message/page-message.component';
import { PageNewsComponent } from './page/page-news/page-news.component';

const routes: Routes = [
  {
    path:'home',
    component:PageHomeComponent
  },
  {
    path:'login',
    component:PageLoginComponent,
    canDeactivate:[ NavigationService ]
  },
  {
    path:'message',
    component:PageMessageComponent,
    canActivate:[ NavigationService ]
  },
  {
    path:'news',
    component:PageNewsComponent
  },
  /* Wildcard : capture all not defiend path */
  {
    path:'**',
    redirectTo:'home',
    // full  : http://hostname/[dashboard/account]
    // prefix  : http://hostname/dashboard/[account]
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
