import { TypeDeleteComponent } from './main-layout/components/type-delete/type-delete.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { MainHeaderComponent } from './main-layout/components/main-header/main-header.component';
import { p404Component } from './404/404.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    p404Component,
    MainLayoutComponent,
    MainHeaderComponent,
    TypeDeleteComponent
  ]
})
export class CoreModule { }
