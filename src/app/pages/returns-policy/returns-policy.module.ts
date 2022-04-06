import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReturnsPolicyRoutingModule } from './returns-policy-routing.module';
import { ReturnsPolicyComponent } from './returns-policy.component';


@NgModule({
  declarations: [
    ReturnsPolicyComponent
  ],
  imports: [
    CommonModule,
    ReturnsPolicyRoutingModule
  ]
})
export class ReturnsPolicyModule { }
