import { inject, Injectable, signal } from '@angular/core';
import { ValutazioneRTO } from '../models/valutazione.model';
import { ValutazioneApi } from './valutazione.api.ts';

@Injectable({
  providedIn: 'root',
})
export class ValutazioneStore {
  private api = inject(ValutazioneApi);

  private readonly _valutazioni = signal<ValutazioneRTO[]>([]);
  readonly valutazioni = this._valutazioni.asReadonly();

  private readonly _loading = signal(false);
  readonly loading = this._loading.asReadonly();

  private readonly _errore = signal<string | null>(null);
  readonly errore = this._errore.asReadonly();

  loadAll(): void{
    this._loading.set(true);
    this._errore.set(null);
    this.api.getAll().subscribe({
      next: items => { this._valutazioni.set(items); this._loading.set(false); },
      error: () => { this._errore.set('Errore nel caricamento'); this._loading.set(false); }
    });
  }

  getById(id: number): ValutazioneRTO | undefined {
    return this._valutazioni().find(item => item.idValutazione === id);
  }
}