import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { TruncateStringPipe } from './search.pipe';
import { ItunesSearchService } from './search.service';

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
  ],
  providers: [
    ItunesSearchService
  ]
})
export class SearchModule { }

