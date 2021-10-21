import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BateauDetailPageRoutingModule } from './bateau-detail-routing.module';

import { BateauDetailPage } from './bateau-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BateauDetailPageRoutingModule
  ],
  declarations: [BateauDetailPage]
})
export class BateauDetailPageModule {}
