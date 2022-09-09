import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetorFormPage } from './setor-form.page';

const routes: Routes = [
  {
    path: '',
    component: SetorFormPage
  },
  {
    path: ':id',
    component: SetorFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetorFormPageRoutingModule {}
