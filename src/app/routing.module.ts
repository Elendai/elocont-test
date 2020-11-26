import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RouteEnum} from './enums';

const routes: Routes = [
  /*{
    path: '',
    redirectTo: RouteEnum.dashboard,
    pathMatch: 'full'
  },*/
  {
    path: '', // RouteEnum.dashboard
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  }/*,
  {
    path: '**',
    redirectTo: RouteEnum.dashboard,
    pathMatch: 'full'
  }*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes/*, {enableTracing: true}*/),
  ],
  exports: [RouterModule]
})
export class RoutingModule {
}
