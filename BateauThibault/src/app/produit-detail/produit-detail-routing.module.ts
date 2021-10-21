import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduitDetailPage } from './produit-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ProduitDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
<<<<<<< HEAD
export class ProduitDetailPageRoutingModule {}
=======
export class ProduitDetailPageRoutingModule {}
>>>>>>> 94e36f73092a12d87ffb73b269f01e7ce126c4e8
