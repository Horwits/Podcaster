import { Routes, RouterModule } from '@angular/router';

// Import our components
import { SearchComponent } from '../search/search.component';
import { QuestionsListComponent } from '../question/questions-list/questions-list.component';
const appRoutes: Routes = [
    // Add the redirect
    /*{
        path: '',
        redirectTo: '/search',
        pathMatch: 'full'
    },*/
    // Add our routes
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'questions',
        component: QuestionsListComponent
    }
];

// Here we are exporting our routes
export const routing = RouterModule.forRoot(appRoutes);
