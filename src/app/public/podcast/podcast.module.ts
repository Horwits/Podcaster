import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PodcastComponent } from './podcast.component';
import { SearchService } from '../search/search.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PodcastComponent],
  providers: [SearchService]
})
export class PodcastModule { }
