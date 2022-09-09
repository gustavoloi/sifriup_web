import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetorPage } from './setor.page';

const routes: Routes = [
  {
    path: '',
    component: SetorPage
  },
  {
    path: 'setor-form',
    loadChildren: () => import('./setor-form/setor-form.module').then( m => m.SetorFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetorPageRoutingModule {}
