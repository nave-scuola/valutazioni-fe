import { Component, computed, inject, input } from '@angular/core';
import { ValutazioneFacade } from '../../services/valutazione-facade';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dettaglio-valutazione',
  imports: [RouterLink],
  templateUrl: './dettaglio-valutazione.html',
  styleUrl: './dettaglio-valutazione.css',
})
export class DettaglioValutazione {
  private route = inject(ActivatedRoute);
  private facade = inject(ValutazioneFacade);

  readonly valutazione = this.facade.valutazione;
  readonly loading = this.facade.loading;
  readonly errore = this.facade.errore;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.facade.loadById(id);
  }
}
