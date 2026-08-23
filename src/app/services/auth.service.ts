import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

interface LoginRequest {
  email: string;
  passwordHash: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  private readonly apiUrl = environment.apiUrl;

  login(email: string, passwordHash: string) {
    const dados: LoginRequest = {
      email,
      passwordHash,
    };

    return this.http.post(`${this.apiUrl}/api/auth/login`, dados);
  }
}
