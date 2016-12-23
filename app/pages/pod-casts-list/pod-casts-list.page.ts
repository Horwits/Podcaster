import { Component } from '@angular/core';
import { PageComponent } from '../page.component';
//  import { pod-castService } from '../../services/pod-cast.service';
import { Movie } from '../../models/movie.model';

@Component({
    moduleId: module.id,
    templateUrl: './pod-cast-list.page.html'
})
export class PodcastListPage implements PageComponent {
    pod-casts: Podcast[] = [];

    constructor(private podcastsData: PodcastsService) { }

    ngOnInit() {
        this.podcastsData.getAll()
            .then(podcasts => {
                this.podcasts = podcasts;
            });
    }
}