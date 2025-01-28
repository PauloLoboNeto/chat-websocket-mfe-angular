import { ChangeDetectorRef, Component } from '@angular/core';
import { ListMessagesItemComponent } from '../list-messages-item/list-messages-item.component';

@Component({
  selector: 'app-list-messages',
  imports: [ListMessagesItemComponent],
  templateUrl: './list-messages.component.html',
  styleUrl: './list-messages.component.scss'
})
export class ListMessagesComponent {

  listMessages = [
    {
      "id": 1,
      "nome": "Alice",
      "horario": "10:30 AM",
      "mensagem": "Olá, tudo bem?",
      "icone_foto": ""
    },
    {
      "id": 2,
      "nome": "Carlos",
      "horario": "11:00 AM",
      "mensagem": "Sim, e você?",
      "icone_foto": ""
    },
    {
      "id": 3,
      "nome": "Jorge",
      "horario": "11:15 AM",
      "mensagem": "Pessoal, reunião confirmada para 14h.",
      "icone_foto": ""
    },
    {
      "id": 4,
      "nome": "Daniel",
      "horario": "11:45 AM",
      "mensagem": "Ok, estarei lá.",
      "icone_foto": ""
    },
    {
      "id": 5,
      "nome": "Fernanda",
      "horario": "12:00 PM",
      "mensagem": "Alguém quer almoçar juntos hoje?",
      "icone_foto": ""
    },
    {
      "id": 6,
      "nome": "Fernanda",
      "horario": "12:00 PM",
      "mensagem": "Alguém quer almoçar juntos hoje?",
      "icone_foto": ""
    },
    {
      "id": 7,
      "nome": "Fernanda",
      "horario": "12:00 PM",
      "mensagem": "Alguém quer almoçar juntos hoje?",
      "icone_foto": ""
    },
    {
      "id": 8,
      "nome": "Fernanda",
      "horario": "12:00 PM",
      "mensagem": "Alguém quer almoçar juntos hoje?",
      "icone_foto": ""
    },
    {
      "id": 9,
      "nome": "Fernanda",
      "horario": "12:00 PM",
      "mensagem": "Alguém quer almoçar juntos hoje?",
      "icone_foto": ""
    },
    {
      "id": 10,
      "nome": "Fernanda",
      "horario": "12:00 PM",
      "mensagem": "Alguém quer almoçar juntos hoje?",
      "icone_foto": ""
    },
    {
      "id": 11,
      "nome": "Fernanda",
      "horario": "12:00 PM",
      "mensagem": "Alguém quer almoçar juntos hoje?",
      "icone_foto": ""
    },
    {
      "id": 12,
      "nome": "Fernanda",
      "horario": "12:00 PM",
      "mensagem": "Alguém quer almoçar juntos hoje?",
      "icone_foto": ""
    },
    {
      "id": 13,
      "nome": "Fernanda",
      "horario": "12:00 PM",
      "mensagem": "Alguém quer almoçar juntos hoje?",
      "icone_foto": ""
    },
    {
      "id": 14,
      "nome": "Fernanda",
      "horario": "12:00 PM",
      "mensagem": "Alguém quer almoçar juntos hoje?",
      "icone_foto": ""
    },
    {
      "id": 15,
      "nome": "Fernanda",
      "horario": "12:00 PM",
      "mensagem": "Alguém quer almoçar juntos hoje?",
      "icone_foto": ""
    },
    {
      "id": 16,
      "nome": "Fernanda",
      "horario": "12:00 PM",
      "mensagem": "Alguém quer almoçar juntos hoje?",
      "icone_foto": ""
    },
    {
      "id": 17,
      "nome": "Fernanda",
      "horario": "12:00 PM",
      "mensagem": "Alguém quer almoçar juntos hoje?",
      "icone_foto": ""
    },
    {
      "id": 18,
      "nome": "Fernanda",
      "horario": "12:00 PM",
      "mensagem": "Alguém quer almoçar juntos hoje?",
      "icone_foto": ""
    },
    {
      "id": 19,
      "nome": "Fernanda",
      "horario": "12:00 PM",
      "mensagem": "Alguém quer almoçar juntos hoje?",
      "icone_foto": ""
    },
    {
      "id": 20,
      "nome": "Fernanda",
      "horario": "12:00 PM",
      "mensagem": "Alguém quer almoçar juntos hoje?",
      "icone_foto": ""
    }
  ]

  constructor(private cdr: ChangeDetectorRef) {}


}
