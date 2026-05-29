import { inject, Injectable } from '@angular/core';
import { ValutazioneStore } from './valutazione-store';
import { ValutazioneRTO } from '../models/valutazione.model';

@Injectable({
  providedIn: 'root',
})
export class ValutazioneFacade {
  private store = inject(ValutazioneStore);

  readonly valutazioni = this.store.getAll();

  getById(id: number): ValutazioneRTO | undefined {
    return this.store.getById(id);
  }
}
