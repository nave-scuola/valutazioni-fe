import { Component } from '@angular/core';
import { ListaValutazioni } from './features/valutazioni/pages/lista-valutazioni/lista-valutazioni';

@Component({
  selector: 'app-root',
  imports: [ListaValutazioni],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'valutazioni-fe';
}
