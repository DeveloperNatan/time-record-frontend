import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WhoAmi } from '../../../services/whoami.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

 
export class HomeComponent implements OnInit {
  private whoAmi = inject(WhoAmi);
  public name: string = '';
  public role: string = '';
  currentTime : string ='';
  lastHour: string = '';
  isMenuOpen = false;

  toggleMenu():void{
    this.isMenuOpen = !this.isMenuOpen;
  }
 
   
    ngOnInit(): void {
      this.updateTime();
      setInterval(()=> this.updateTime(), 1000);

      this.whoAmi.GetCurrentUser().subscribe({
        next: (res)=>{
          this.name = res.name;
          this.role = res.job;
        },
        error: (erro)=>{

        }

      })
    }

    updateTime(): void {
      const now = new Date();
      this.currentTime = now.toLocaleDateString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
      })
    }

    clockIn(): void {
        const now = new Date();
        const formattedTime = now.toLocaleTimeString('pt-BR');

        // Aqui voce integraria com sua API backend
        console.log('Ponto marcado:', formattedTime);

        // Atualiza a ultima marcacao
        this.lastHour = `Hoje, ${formattedTime}`;

        // Feedback visual (opcional - pode substituir por toast/notificacao)
        alert(`Ponto marcado com sucesso!\nHorario: ${formattedTime}`);
    }
}
