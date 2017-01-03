import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import {AngularFireModule} from 'angularfire2';
import {firebaseConfig} from '../environments/firebase.config';

import { MainNavModule } from './public/navigation/main-nav.module';
import { FooterModule } from './public/footer/footer.module';
import { SearchModule } from './public/search/search.module';
import { QuestionModule } from './public/question/question.module';
import { HomeModule } from './public/home/home.module';
import { LoginModule } from './public/signin/signin.module';
import { TopEightPodcastsModule } from './public/top-eight-podcasts/top-eight-podcasts.module';
import { SignupModule } from './public/signup/signup.module';
import { ProfileModule } from './public/signup/profile/profile.module';

import { AuthGuard } from './core/services/auth-guard.service';
import { AuthService } from './core/services/auth.service';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './routes/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
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
    SignupModule,
    ProfileModule,
    TopEightPodcastsModule,
    LoginModule,

    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    AuthGuard, AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
