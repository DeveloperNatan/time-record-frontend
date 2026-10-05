import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

interface LoginRequest {
  email: string;
  password: string;
}

interface CurrentUserResponse{
  authenticated: boolean;
  email: string;
  userId: string;
}

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private http = inject(HttpClient);

  private readonly apiUrl = environment.apiUrl;

  login(email: string, password: string) {
    const dados: LoginRequest = {
      email,
      password
    };

    return this.http.post(`${this.apiUrl}/api/auth/login`, dados);
  }

  getCurrentuUser(){
    return this.http.get<CurrentUserResponse>(`${this.apiUrl}/api/auth/me`)
  }
}
