import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformationGerantPage } from './information-gerant.page';

const routes: Routes = [
  {
    path: '',
    component: InformationGerantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformationGerantPageRoutingModule {}
