import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BateauListPageRoutingModule } from './bateau-list-routing.module';

import { BateauListPage } from './bateau-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BateauListPageRoutingModule
  ],
  declarations: [BateauListPage]
})
export class BateauListPageModule {}
