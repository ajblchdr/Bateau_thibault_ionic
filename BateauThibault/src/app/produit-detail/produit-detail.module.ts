import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduitDetailPageRoutingModule } from './produit-detail-routing.module';

import { ProduitDetailPage } from './produit-detail.page';

import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicStorageModule.forRoot(),
    ProduitDetailPageRoutingModule
  ],
  declarations: [ProduitDetailPage]
})
export class ProduitDetailPageModule {}