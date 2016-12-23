import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {Ng2BootstrapModule} from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
imports: [
    BrowserModule,
    HttpModule,
//    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  declarations: [
    AppComponent,
    PodcastsListPage,
  ],
  bootstrap: [AppComponent],
  providers: [
    PodcastsService,
  ]
})
export class AppModule { }

