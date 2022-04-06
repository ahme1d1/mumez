import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReturnsPolicyComponent } from './returns-policy.component';

const routes: Routes = [{ path: '', component: ReturnsPolicyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReturnsPolicyRoutingModule { }
