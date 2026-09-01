import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  currentTime : string ='';
  lastHour: string = 'Hoje, 07:00';

    user = {
        name: 'Natan',
        role: 'Desenvolvedor'
    };

    ngOnInit(): void {
      this.updateTime();
      setInterval(()=> this.updateTime(), 1000);
    }

    updateTime(): void {
      const now = new Date();
      this.currentTime = now.toLocaleDateString('pt-BR', {
        weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
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
