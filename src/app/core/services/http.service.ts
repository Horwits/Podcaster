import { Podcast } from '../../core/models/podcast.model';
import { Injectable } from '@angular/core';
import { Http, Headers, JsonpModule, Jsonp, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HttpService {
    /*private headers = new Headers({ 'Access-Control-Allow-Origin': '*' });*/
    constructor(private jsonp: Jsonp, private http: Http) { }

    getResultsFromRSS(apiUrl: string): Observable<Object[]> {
        return this.http.get(apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getResultsFromAPi(apiUrl: string) {
        return this.jsonp.request(apiUrl).map(res => {
            return res.json();
        });
    }

    getByTermFromApi(apiRootUrl: string, term: string, media: string): Observable<Object> {
        // api root url could be 'https://itunes.apple.com/search' 
        let apiURL = `${apiRootUrl}?term=${term}&media=${media}&limit=20&callback=JSONP_CALLBACK`;
        return this.jsonp.request(apiURL).map(res => {
            return res.json();
        });
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
