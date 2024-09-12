import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompartirMiDespensaPageRoutingModule } from './compartir-mi-despensa-routing.module';

import { CompartirMiDespensaPage } from './compartir-mi-despensa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompartirMiDespensaPageRoutingModule
  ],
  declarations: [CompartirMiDespensaPage]
})
export class CompartirMiDespensaPageModule {}
