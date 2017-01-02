import { Podcast } from '../../core/models/podcast.model';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ItunesSearchService {
    /*private headers = new Headers({ 'Access-Control-Allow-Origin': '*' });*/
    constructor(private http: Http) { }

    // Itunes search, country = us, media = software, limit = 10
    getResults(): Observable<Object[]> {
        // Construct the itunes search url with callback
       /* let url = 'https://itunes.apple.com/search?term=jack+johnson&limit=25';*/
        let url = '../../../assets/testing-data/top-50-podcasts.json';
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
