import { Component, computed, inject, input } from '@angular/core';
import { ValutazioneFacade } from '../../services/valutazione-facade';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dettaglio-valutazione',
  imports: [RouterLink, CommonModule],
  templateUrl: './dettaglio-valutazione.html',
  styleUrl: './dettaglio-valutazione.css',
})
export class DettaglioValutazione {
  private route = inject(ActivatedRoute);
  private facade = inject(ValutazioneFacade);

  id = Number(this.route.snapshot.paramMap.get('id'));

  readonly valutazione = this.facade.valutazione;
  readonly loading = this.facade.loading;
  readonly errore = this.facade.errore;

  ngOnInit(): void {
    this.facade.loadById(this.id);
  }

  classeBadge(voto: number) {
    if (voto >= 8) return 'badge-voto badge-alto';
    if (voto >= 6) return 'badge-voto badge-medio';
    return 'badge-voto badge-basso';
  }

}
