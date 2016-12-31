import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePrivateComponent } from './home-private/home-private.component';
import { HomePublicComponent } from './home-public/home-public.component';
import { HomeMainComponent } from './home-main/home-main.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomePrivateComponent,
    HomePublicComponent,
    HomeMainComponent
  ]
})
export class HomeModule { }
