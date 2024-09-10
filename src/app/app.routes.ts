import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:"home",component:HomeComponent},
    {path:"services",component:ServicesComponent},
    {path:"about",component:AboutComponent},
    {path:"login",component:LoginComponent},
];
