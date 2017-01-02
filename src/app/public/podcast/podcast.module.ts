import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PodcastComponent } from './podcast.component';

import { HttpService } from '../../core/services/http.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PodcastComponent],
  providers: [HttpService]
})
export class PodcastModule { }
