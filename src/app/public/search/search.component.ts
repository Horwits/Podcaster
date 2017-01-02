import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HttpService } from '../../core/services/http.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.style.css']
})

export class SearchComponent implements OnInit {
    private items: Array<Object>;
    private errorMessage: string;

    /* private url = 'https://itunes.apple.com/search?term=podcast&country=us&entity=podcast&attribute=ratingIndex&limit=10&callback=JSONP_CALLBACK';*/
    /*private url = 'https://feedwrangler.net/api/v2/podcasts/get';*/
    private url = 'https://itunes.apple.com/us/rss/toppodcasts/limit=10/explicit=true/json';
    searchTerm: string;

    constructor(private http: Http, private itunesService: HttpService) {
    }
    // Initiate search based on input value
    ngOnInit() {
        this.getAll();
    }
    private getAll() {
        let result;

        this.itunesService.getResultsFromRSS(this.url)
            .subscribe(
            (response) => {
                result = response;
                /*console.log(result.results);
                this.items = result.results.slice(0, 8);*/ // this should be done with a pipe
                this.items = result
                    .feed
                        .entry
                        .map(x => x = {
                            author: x["im:name"].label,
                            image: x["im:image"][2].label,
                            title: x["title"].label
                        })
                        .slice(0, 8);
                /*console.log(result.feed.entry[0]);*/
            }
            ,
            error => this.errorMessage = error
            );
    }

    /*onSearch(searchTerm) {
        let res = this.items.find(x => x[searchTerm] === this.searchTerm);
        console.log(res);
    }*/
}
