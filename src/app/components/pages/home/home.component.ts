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
  horarioAtual : string ='';
  ultimaMarcacao: string = 'Hoje, 07:00';

    usuario = {
        nome: 'Natan',
        cargo: 'Desenvolvedor'
    };

    ngOnInit(): void {
      this.atualizarHorario();
      setInterval(()=> this.atualizarHorario(), 1000);
    }

    atualizarHorario(): void {
      const now = new Date();
      this.horarioAtual = now.toLocaleDateString('pt-BR', {
        weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
      })
    }

    marcarPonto(): void {
        const now = new Date();
        const horarioFormatado = now.toLocaleTimeString('pt-BR');

        // Aqui voce integraria com sua API backend
        console.log('Ponto marcado:', horarioFormatado);

        // Atualiza a ultima marcacao
        this.ultimaMarcacao = `Hoje, ${horarioFormatado}`;

        // Feedback visual (opcional - pode substituir por toast/notificacao)
        alert(`Ponto marcado com sucesso!\nHorario: ${horarioFormatado}`);
    }
}
