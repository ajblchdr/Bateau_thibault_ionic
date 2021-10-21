import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BateauListPage } from './bateau-list.page';

const routes: Routes = [
  {
    path: '',
    component: BateauListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BateauListPageRoutingModule {}
