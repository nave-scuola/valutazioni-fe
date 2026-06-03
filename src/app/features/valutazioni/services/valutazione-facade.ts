import { inject, Injectable } from '@angular/core';
import { ValutazioneStore } from './valutazione-store';
import { ValutazioneRTO, ValutazioneTO } from '../models/valutazione.model';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ValutazioneFacade {
  private store = inject(ValutazioneStore);
  private router = inject(Router);

  readonly valutazioni = this.store.valutazioni;
  readonly loading = this.store.loading;
  readonly errore = this.store.errore;
  readonly valutazione = this.store.valutazione;

  loadAll(): void {
    this.store.loadAll();
  }

  loadById(id: number): void{
    this.store.loadById(id);
  }

  salva(form: FormGroup, id?: number): void {
    if (form.invalid) return;

    const to: ValutazioneTO = form.getRawValue();
    const obs = id ? this.store.update(id, to) : this.store.create(to);

    obs.subscribe({
      next: (risultato) => this.router.navigate(['/valutazioni', risultato.idValutazione]),
      error: (err) => { /* gestito dall'error interceptor in FE-4.05 */ }
    });
  }

  elimina(id: number): void {
    if (!confirm('Sei sicuro di voler eliminare questo elemento?')) return;
    this.store.delete(id).subscribe({
      next: () => {
        this.store.loadAll();
        this.router.navigate(['/valutazioni']);
      }
    });
  }
}
