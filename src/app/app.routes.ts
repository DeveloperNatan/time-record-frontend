import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterCompanyComponent } from './components/pages/register-company/register-company.component';

export const routes: Routes = [
  { path: '', redirectTo: 'sign-up', pathMatch: 'full' },
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
];
