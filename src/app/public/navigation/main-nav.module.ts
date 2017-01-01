import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavPublicComponent } from './nav-public/nav-public.component';
import { NavPrivateComponent } from '../../private/navigation/nav-private/nav-private.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
      NavPublicComponent,
      NavPrivateComponent,
  ],
  declarations: [NavPublicComponent, NavPrivateComponent]
})
export class MainNavModule { }
