import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiDespensaPageRoutingModule } from './mi-despensa-routing.module';

import { MiDespensaPage } from './mi-despensa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiDespensaPageRoutingModule
  ],
  declarations: [MiDespensaPage]
})
export class MiDespensaPageModule {}
