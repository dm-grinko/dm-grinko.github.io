import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MainFooterComponent } from './main-layout/components/main-footer/main-footer.component';
import { MainHeaderComponent } from './main-layout/components/main-header/main-header.component';
import { p404Component } from './404/404.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './main-layout/components/loader/loader.component';
import { 
  MainService
} from './services';

const services = [
  MainService
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    p404Component,
    MainLayoutComponent,
    MainFooterComponent,
    MainHeaderComponent,
    LoaderComponent
  ],
  providers: [
    ...services,
  ]
})
export class CoreModule { }
