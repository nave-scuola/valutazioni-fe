import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'valutazioni', loadChildren: () => import('./features/valutazioni/valutazioni.routes').then(m => m.VALUTAZIONI_ROUTES) },
    { path: '', redirectTo: 'valutazioni', pathMatch: 'full' },
    { path: '**', redirectTo: 'valutazioni' }
];
