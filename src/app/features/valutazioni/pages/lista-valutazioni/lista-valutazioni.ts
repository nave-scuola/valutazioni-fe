import { Component, computed, inject, signal } from '@angular/core';
import { Card } from '../../../../shared/components/card/card';
import { ValutazioneRTO } from '../../models/valutazione.model';
import { ValutazioneFacade } from '../../services/valutazione-facade';
import { FiltroValutazioni } from '../../components/filtro-valutazioni/filtro-valutazioni';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-valutazioni',
  imports: [Card, FiltroValutazioni],
  templateUrl: './lista-valutazioni.html',
  styleUrl: './lista-valutazioni.css',
})
export class ListaValutazioni {
  titolo = 'Valutazioni';

  private router = inject(Router);

  private facade = inject(ValutazioneFacade);
  readonly filtroTesto = signal('');

  readonly filtroAvanzato = signal<{ voto: string; data: string }>({
    voto: '',
    data: '',
  });


  readonly valutazioni = this.facade.valutazioni;
  
  readonly valutazioniFiltrate = computed(() => {
    const testo = this.filtroTesto().toLowerCase();
    const { voto, data } = this.filtroAvanzato();
    
    return this.valutazioni.filter(v => {
      const matchStudente =
        !testo || v.codiceStudente.toLowerCase().includes(testo);
      
      const matchVoto = !voto || v.voto.toString() === voto;
      const matchData = !data || v.data === data;
      
      return matchStudente && matchVoto && matchData;
    });
  });

  onCardClick(item: ValutazioneRTO): void {
    this.router.navigate(['/valutazioni', item.idValutazione]);
  }

  onFiltro(filtro: { voto: string; data: string }) {
    this.filtroAvanzato.set(filtro);
  }
}
