import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  public errorMessage: string = '';

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    passwordHash: [''],
  });


  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, passwordHash: passwordHash } = this.loginForm.getRawValue();

    this.authService.login(email!, passwordHash!).subscribe({
      next: (resposta) => {
        this.router.navigate(['/home']);
      },
      error: (erro) => {
        switch (erro.status) {
          case 404:
            this.errorMessage = 'Email não encontrado';
            break;
          case 401:
            this.errorMessage = 'Sua senha está incorreta';
            break;
          default:
            this.errorMessage = 'Ocorreu algum erro inesperado ao realizar login';
            break;
        }
      },
    });
  }
}
