import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ItunesSearchService } from './search.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.style.css']
})

export class SearchComponent implements OnInit {
    private items: Array<Object>;
    private errorMessage: string;

    searchTerm: string;

    constructor(private http: Http, private itunesService: ItunesSearchService) {
    }
    // Initiate search based on input value
    ngOnInit() {
        this.getAll();
    }
    private getAll() {
        let result;

        this.itunesService.getResults()
            .subscribe(
            (response) => {
                console.log(response);
                result = response;
                this.items = result.results.slice(0, 6); // this should be done with a pipe
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
