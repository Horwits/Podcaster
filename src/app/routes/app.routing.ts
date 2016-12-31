import { Routes, RouterModule } from '@angular/router';

// Import our components
import { SearchComponent } from '../search/search.component';
import { QuestionsListComponent } from '../question/questions-list/questions-list.component';
import { HomeMainComponent } from '../home/home-main/home-main.component';

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
    }
];

// Here we are exporting our routes
export const routing = RouterModule.forRoot(appRoutes);
