import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterCompanyComponent } from './components/pages/register-company/register-company.component';
import { HomeComponent } from './components/pages/home/home.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  // { path: '', redirectTo: 'sign-in', pathMatch: 'full' },

  {
    path: 'sign-in',
    component: LoginComponent,
    title: 'Sign In - Colaborador',
  },
  {
    path: 'sign-up',
    component: RegisterCompanyComponent,
    title: 'Sign Up - Empresa',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home - TimeRecord',
    canActivate: [authGuard]
  }
];