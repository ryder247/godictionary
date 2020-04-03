import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RateusPage } from './rateus.page';

const routes: Routes = [
  {
    path: '',
    component: RateusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RateusPageRoutingModule {}
