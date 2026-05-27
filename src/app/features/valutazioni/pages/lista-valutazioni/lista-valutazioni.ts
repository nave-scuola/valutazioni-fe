import { Component } from '@angular/core';
import { Card } from '../../../../shared/components/card/card';

@Component({
  selector: 'app-lista-valutazioni',
  imports: [Card],
  templateUrl: './lista-valutazioni.html',
  styleUrl: './lista-valutazioni.css',
})
export class ListaValutazioni {
  titolo = 'Valutazioni';
}
