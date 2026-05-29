import { Component, computed, inject, signal } from '@angular/core';
import { Card } from '../../../../shared/components/card/card';
import { ValutazioneRTO } from '../../models/valutazione.model';
import { ValutazioneFacade } from '../../services/valutazione-facade';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-valutazioni',
  imports: [Card],
  templateUrl: './lista-valutazioni.html',
  styleUrl: './lista-valutazioni.css',
})
export class ListaValutazioni {
  titolo = 'Valutazioni';

  private router = inject(Router);

  private facade = inject(ValutazioneFacade);
  readonly filtroTesto = signal('');

  readonly valutazioni = this.facade.valutazioni;
  
  readonly valutazioniFiltrate = computed(() => {
    const filtro = this.filtroTesto().toLowerCase();

    if (!filtro) return this.valutazioni;

    return this.valutazioni.filter(v =>
      v.codiceStudente.toLowerCase().includes(filtro) ||
      v.livelloRaggiunto.toLowerCase().includes(filtro) ||
      v.voto.toString().includes(filtro)
    );
  });

  onCardClick(item: ValutazioneRTO): void {
    this.router.navigate(['/valutazioni', item.idValutazione]);
  }
}
