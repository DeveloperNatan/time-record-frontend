import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register-company',
  standalone: true,
  imports: [],
  templateUrl: './register-company.component.html',
  styleUrl: './register-company.component.scss',
})
export class RegisterCompanyComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    passwordHash: [''],
  });

  onSubmit() {
    console.log('Botão clicado');
    console.log(this.loginForm.value);
    console.log(this.loginForm.valid);

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
