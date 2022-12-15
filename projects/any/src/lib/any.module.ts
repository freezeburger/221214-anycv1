import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PopinDirective } from './directives/popin.directive';

@NgModule({
  declarations: [
    NavbarComponent,
    PopinDirective
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    NavbarComponent,
    PopinDirective
  ],
  providers: []
})
export class AnyModule { }
