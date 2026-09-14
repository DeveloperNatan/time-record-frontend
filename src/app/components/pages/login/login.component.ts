import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent  {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

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
        console.log('Login realizado:', resposta);
      },
      error: (erro) => {
        console.error('Erro ao fazer login:', erro);
      },
    });
  }
}
