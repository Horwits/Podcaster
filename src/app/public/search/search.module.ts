import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { TruncateStringPipe } from './search.pipe';

import { HttpService } from '../../core/services/http.service';

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
    HttpService
  ]
})
export class SearchModule { }

