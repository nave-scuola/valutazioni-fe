import { Component } from '@angular/core';
import { ListaValutazioni } from './features/valutazioni/pages/lista-valutazioni/lista-valutazioni';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ListaValutazioni, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'valutazioni-fe';
}
