import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


import { MainNavModule } from './navigation/main-nav.module';
import { FooterModule } from './footer/footer.module';
import { SearchModule } from './search/search.module';
import { QuestionModule } from './question/question.module';
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';

import { routing } from './routes/app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,

    routing,

    MainNavModule,
    HomeModule,
    FooterModule,
    SearchModule,
    QuestionModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
