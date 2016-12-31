import './polyfills.ts';

import { AppComponent } from './app/app.component';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { JsonpModule } from '@angular/http';
import { ItunesSearchService } from './app/search/search.service';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
platformBrowserDynamic([ItunesSearchService, JsonpModule]);
