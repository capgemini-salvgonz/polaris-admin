import { Routes } from '@angular/router';
import { LoginComponent } from './feature/login/login.component';
import { WelcomeComponent } from './feature/welcome/welcome.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
];
