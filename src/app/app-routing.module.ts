import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './core/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { p404Component } from './core/404/404.component';

const routes: Routes = [
{
    path: '',
    component: MainLayoutComponent,
    children: [
        {
            path: '',
            loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
        },
    ]
},
{ path: '404', component: p404Component },
{
  path: '**',
  redirectTo: '404'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
