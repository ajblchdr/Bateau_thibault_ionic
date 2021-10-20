import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BateauDetailPage } from './bateau-detail.page';

const routes: Routes = [
  {
    path: '',
    component: BateauDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BateauDetailPageRoutingModule {}
