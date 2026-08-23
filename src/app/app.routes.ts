import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterCompanyComponent } from './components/pages/register-company/register-company.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'Sign In',
    component: LoginComponent,
    title: 'Sign In - Colaborador',
  },
  {
    path: 'Sign Up',
    component: RegisterCompanyComponent,
    title: 'Sign Up - Empresa',
  },
];
