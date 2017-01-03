import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import our components
import { SearchComponent } from '../public/search/search.component';
import { QuestionsListComponent } from '../public/question/questions-list/questions-list.component';
import { HomeMainComponent } from '../public/home/home-main/home-main.component';
import { SignupComponent } from '../public/signup/signup.component';
import { AboutComponent } from '../public/footer/footer-about/about.component';
import { SignInComponent } from '../public/signin/signin.component';
import { TopEightComponent } from '../public/top-eight-podcasts/top-eight.component';

import {AuthGuard} from '../core/services/auth-guard.service';

const appRoutes: Routes = [
    // Add the redirect
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    // Add our routes
    {
        path: 'top-eight',
        component: TopEightComponent
    },
    {
        path: 'search',
        component: SearchComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'questions',
        component: QuestionsListComponent
    },
    {
        path: 'home',
        component: HomeMainComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
     {
        path: 'signin',
        component: SignInComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
