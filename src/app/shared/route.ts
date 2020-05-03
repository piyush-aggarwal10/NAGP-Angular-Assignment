import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { NewsSectionComponent } from '../news-section/news-section.component';
import { AdminPanelComponent } from '../admin-panel/admin-panel.component';
import { PrecautionsComponent } from '../precautions/precautions.component';
import { PageNotFoundComponent } from './other-components/page-not-found/page-not-found.component';
import { CredentialService } from '../services/credentials.service';

 
const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    // {
    //     path:'App',
    //     component:AppComponent
    // },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path:'newssection',
        component: NewsSectionComponent
    },
    {
        path:'admin',
        component: AdminPanelComponent,
        canActivate: [CredentialService]
    },
    {
        path:'precautions',
        component:PrecautionsComponent
    },
    {
        path:'**',
        component: PageNotFoundComponent
    },
];
 
export const RouteInfo = RouterModule.forRoot(routes);