import { SignupModule } from './signup/signup.module';
import { AuthGuard } from './core/services/auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { MainNavModule } from './public/navigation/main-nav.module';
import { FooterModule } from './public/footer/footer.module';
import { SearchModule } from './public/search/search.module';
import { QuestionModule } from './public/question/question.module';
import { HomeModule } from './public/home/home.module';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './routes/app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,

    AppRoutingModule,

    MainNavModule,
    HomeModule,
    FooterModule,
    SearchModule,
    QuestionModule,
    SignupModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
