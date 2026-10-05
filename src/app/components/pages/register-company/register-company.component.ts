import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../../../services/register.service';
import { Router } from '@angular/router';

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
  private router = inject(Router);

  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: [''],
    companyName: ['']
  });

  onSubmit() {
    
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const { email, password, companyName } = this.registerForm.getRawValue();

    this.registerService.register(email!, password!, companyName!).subscribe({
      next: (resposta) => {
        this.router.navigate(['/home']);
      },
      error: (erro) => {
        console.error('Erro ao fazer login:', erro);
      },
    });
  }
}
