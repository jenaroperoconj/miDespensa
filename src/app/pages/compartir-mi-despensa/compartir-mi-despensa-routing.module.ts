import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompartirMiDespensaPage } from './compartir-mi-despensa.page';

const routes: Routes = [
  {
    path: '',
    component: CompartirMiDespensaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompartirMiDespensaPageRoutingModule {}
