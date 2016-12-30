import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { TruncateString } from './search.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SearchComponent
  ],
  declarations: [
      SearchComponent,
      TruncateString
  ]
})
export class SearchModule { }
