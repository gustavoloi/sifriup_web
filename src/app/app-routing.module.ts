import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// guards
import { PrivateGuard } from './guard/private.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./public/public.module').then((m) => m.PublicModule),
    pathMatch: 'full',
  },
  {
    path: 'app',
    loadChildren: () => import('./private/private.module').then((m) => m.PrivateModule),
    canActivate: [PrivateGuard],
  },
  {
    path: '**',
    redirectTo: 'app',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
