import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { AboutComponent } from './footer-about/about.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    AboutComponent
  ],
  declarations: [FooterComponent, AboutComponent]
})
export class FooterModule { }
