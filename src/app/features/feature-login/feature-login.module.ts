import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureLoginComponent } from './feature-login.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    FeatureLoginComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    FeatureLoginComponent
  ]
})
export class FeatureLoginModule { }
