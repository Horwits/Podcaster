import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import our components
import { SearchComponent } from '../public/search/search.component';
import { QuestionsListComponent } from '../public/question/questions-list/questions-list.component';
import { HomeMainComponent } from '../public/home/home-main/home-main.component';
//import { UserSignupComponent } from '../login/user-signup.component';

import { AuthService } from '../core/services/auth.service';
import { AuthGuard } from '../core/services/auth-guard.service';

const appRoutes: Routes = [
    // Add the redirect
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    // Add our routes
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'questions',
        component: QuestionsListComponent
    },
    {
        path: 'home',
        component: HomeMainComponent
    }/*,
    {
        path: 'signup',
        component: UserSignupComponent
    }*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
