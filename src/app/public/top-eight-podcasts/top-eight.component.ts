import { Podcast } from '../../core/models/podcast.model';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { HttpService } from '../../core/services/http.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-top-eight',
  templateUrl: './top-eight.component.html',
  styleUrls: ['./top-eight.component.css']
})
export class TopEightComponent implements OnInit {

  private items: Array<Podcast>;
  private errorMessage: string;

  private url = 'https://itunes.apple.com/us/rss/toppodcasts/limit=8/explicit=true/json';
  searchTerm: string;

  constructor(private http: Http, private searchService: HttpService) {
  }
  // Initiate search based on input value
  ngOnInit() {
    this.getTopEight();
  }
  private getTopEight() {
    let result;

    this.searchService.getResultsFromRSS(this.url)
      .subscribe(
      (response) => {
        result = response;
        this.items = result
          .feed
          .entry
          .map(x => x = new Podcast(
            x['title'].label,
            x['im:name'].label,
            x['im:image'][2].label,
          ))
          .slice(0, 8);
      }
      ,
      error => this.errorMessage = error
      );
  }
}

