import { Routes } from '@angular/router';

export const VALUTAZIONI_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./pages/lista-valutazioni/lista-valutazioni').then(m => m.ListaValutazioni) },
  { path: ':id', loadComponent: () => import('./pages/dettaglio-valutazione/dettaglio-valutazione').then(m => m.DettaglioValutazione) }
];