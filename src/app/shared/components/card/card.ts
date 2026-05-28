import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  image = input<string>('');
  codiceStudente = input.required<string>();
  voto = input<number>();

  selezionato = output<void>();
}
