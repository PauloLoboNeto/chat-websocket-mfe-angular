import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  //event coalescing diminui a quantidade de detecções de mudanças que o angular faz quando se trata de event bubbling.
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
