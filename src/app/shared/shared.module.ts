import { NgModule } from '@angular/core';
import { NgImportModule } from './ng-import.module';
import { AnyModule } from '@any';



@NgModule({
  exports: [
    NgImportModule,
    AnyModule
  ]
})
export class SharedModule { }
