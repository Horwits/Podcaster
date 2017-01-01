import './polyfills.ts';

import { AppComponent } from './app/app.component';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { JsonpModule } from '@angular/http';
import { ItunesSearchService } from './app/public/search/search.service';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic([ItunesSearchService, JsonpModule]).bootstrapModule(AppModule);
/*platformBrowserDynamic();*/
