import { Component, computed, inject, input } from '@angular/core';
import { ValutazioneFacade } from '../../services/valutazione-facade';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dettaglio-valutazione',
  imports: [RouterLink],
  templateUrl: './dettaglio-valutazione.html',
  styleUrl: './dettaglio-valutazione.css',
})
export class DettaglioValutazione {
  id = input.required<string>();

  private facade = inject(ValutazioneFacade);

  readonly valutazione = computed(() =>
    this.facade.getById(Number(this.id()))
  );
}
