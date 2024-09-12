import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiDespensaPage } from './mi-despensa.page';

const routes: Routes = [
  {
    path: '',
    component: MiDespensaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiDespensaPageRoutingModule {}
