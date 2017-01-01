import { Injectable } from '@angular/core';
import { Http, Jsonp, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ItunesSearchService {

    constructor(public jsonp: Jsonp) { }

    // Itunes search, country = us, media = software, limit = 10
    getResults(searchTerm): Observable<any[]> {
        // Construct the itunes search url with callback
        let url = 'https://itunes.apple.com/search?term=' + searchTerm + '&country=us&media=software&limit=10&callback=JSONP_CALLBACK';
        return this.jsonp.get(url)
            .map(function (res: Response) {
                return res.json() || {};
            }).catch(function (error: any) {
                return Observable.throw(error);
            });
    }
}

