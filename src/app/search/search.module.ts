import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchComponent} from './search.component'
import { TruncateStringPipe } from './search.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SearchComponent
  ],
  declarations: [
      SearchComponent,
      TruncateStringPipe
  ]
})
export class SearchModule { }

