import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ItunesSearchService } from './search.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: "app-search",
    templateUrl: './search.component.html',
    styleUrls: ['./search.style.css']
})

export class SearchComponent {
    items: Array<Object>;
    message: String;

    constructor(private itunesService: ItunesSearchService) {
    }
    // Initiate search based on input value
    initSearch(value) {
        this.itunesService.getResults(value).map(result => {
            // Clear previous items
            this.items = null;
            this.message = null;
            if (result.values.length > 0) {
                for (var item of result) {
                    this.items = value;
                }
            }
            else {
                this.message = "No results for \"" + value + "\"";
            }
        });
    }
}
