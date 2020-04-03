import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RateusPageRoutingModule } from './rateus-routing.module';

import { RateusPage } from './rateus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RateusPageRoutingModule
  ],
  declarations: [RateusPage]
})
export class RateusPageModule {}
