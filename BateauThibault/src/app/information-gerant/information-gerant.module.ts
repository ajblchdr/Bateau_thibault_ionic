import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformationGerantPageRoutingModule } from './information-gerant-routing.module';

import { InformationGerantPage } from './information-gerant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformationGerantPageRoutingModule
  ],
  declarations: [InformationGerantPage]
})
export class InformationGerantPageModule {}
