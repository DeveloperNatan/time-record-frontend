import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../../../services/register.service';

@Component({
  selector: 'app-register-company',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-company.component.html',
  styleUrl: './register-company.component.scss',
})
export class RegisterCompanyComponent {
  private fb = inject(FormBuilder);
  private registerService = inject(RegisterService);

  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: [''],
    companyName: ['']
  });

  onSubmit() {
    console.log('Botão clicado');
    console.log(this.registerForm.value);
    console.log(this.registerForm.valid);

    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const { email, password, companyName } = this.registerForm.getRawValue();

    this.registerService.register(email!, password!, companyName!).subscribe({
      next: (resposta) => {
        console.log('Login realizado:', resposta);
      },
      error: (erro) => {
        console.error('Erro ao fazer login:', erro);
      },
    });
  }
}
