import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

interface LoginRequest {
  email: string;
  password: string;
  companyName: string;
}

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private http = inject(HttpClient);

  private readonly apiUrl = environment.apiUrl;

  register(email: string, password: string, companyName: string) {
    const dados: LoginRequest = {
      email,
      password,
      companyName,
    };

    return this.http.post(`${this.apiUrl}/api/auth/register/companies`, dados);
  }
}
