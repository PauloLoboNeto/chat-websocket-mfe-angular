import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'chat', loadComponent: () => import('./../pages/chat/chat.component').then((m) => m.ChatComponent)
    },
    {
        path: 'list-message', loadComponent: () => import('./../pages/list-messages/list-messages.component').then((m) => m.ListMessagesComponent)
    }
];
