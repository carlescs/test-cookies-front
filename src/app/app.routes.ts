import { Route } from '@angular/router';
import { HomeComponent } from './components/Home/home.component';

export const appRoutes: Route[] = [
    {path:'', component: HomeComponent},
    {path:'add-cookie', loadChildren: () => import('./modules/add-cookie/routes')},
];
