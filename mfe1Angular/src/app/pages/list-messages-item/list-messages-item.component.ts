import { Component, input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-messages-item',
  imports: [RouterModule, ],
  templateUrl: './list-messages-item.component.html',
  styleUrl: './list-messages-item.component.scss'
})
export class ListMessagesItemComponent {
  nome = input<string>();
  quantidadeMensagensNaoLidas = input<string>();
  horario = input<string>();
  mensagem = input<string>();

  constructor(private route: Router) { }
  
  abrirChat() {
    this.route.navigate(['/chat']);
  }
}
