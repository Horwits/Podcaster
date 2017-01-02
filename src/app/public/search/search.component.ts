import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HttpService } from '../../core/services/http.service';

import { Podcast } from '../../core/models/podcast.model';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.style.css']
})

export class SearchComponent implements OnInit {
    private items: Array<Podcast>;
    private errorMessage: string;
    private apiRootUrl = 'https://itunes.apple.com/search';

    private url = 'https://itunes.apple.com/us/rss/toppodcasts/limit=10/explicit=true/json';
    searchTerm: string;
    private term: string;
    constructor(private httpService: HttpService) {
    }
    ngOnInit() {
    }

    private getByTerm(term: string) {
        let result;
        let media = 'podcast';
        return this.httpService.getByTermFromApi(this.apiRootUrl, term, media).subscribe(
            (response) => {
                result = response;
                console.log(result);
                this.items = result
                    .results
                    .map(item => {
                        return {
                            title: item.trackName,
                            author: item.artistName,
                            trackViewUrl: item.trackViewUrl,
                            image: item.artworkUrl600,
                            feed: item.feedUrl,
                            genres: item.genres
                        } as Podcast;
                    }).slice(0, 8);
            }
            ,
            error => this.errorMessage = error
        );
    }

    onSearch(term) {
        this.getByTerm(term);
    }
}
