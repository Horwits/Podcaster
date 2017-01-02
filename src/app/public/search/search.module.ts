import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { TruncateStringPipe } from './search.pipe';
import { SearchService } from './search.service';

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
    SearchService
  ]
})
export class SearchModule { }

