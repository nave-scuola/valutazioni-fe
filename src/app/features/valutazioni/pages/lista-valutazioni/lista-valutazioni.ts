import { Component } from '@angular/core';
import { Card } from '../../../../shared/components/card/card';
import { ValutazioneRTO } from '../../models/valutazione.model';

@Component({
  selector: 'app-lista-valutazioni',
  imports: [Card],
  templateUrl: './lista-valutazioni.html',
  styleUrl: './lista-valutazioni.css',
})
export class ListaValutazioni {
  titolo = 'Valutazioni';

  valutazioni: ValutazioneRTO[] = [
    {
      idValutazione: 1,
      codiceStudente: 'STU001',
      codiceEdizione: 'ED2026',
      voto: 8,
      livelloRaggiunto: 'Avanzato',
      data: '2026-05-27'
    },
    {
      idValutazione: 2,
      codiceStudente: 'STU002',
      codiceEdizione: 'ED2026',
      voto: 6,
      livelloRaggiunto: 'Intermedio',
      data: '2026-05-20'
    },
    {
      idValutazione: 3,
      codiceStudente: 'STU003',
      codiceEdizione: 'ED2026',
      voto: 9,
      livelloRaggiunto: 'Avanzato',
      data: '2026-05-18'
    },
    {
      idValutazione: 4,
      codiceStudente: 'STU004',
      codiceEdizione: 'ED2026',
      voto: 5,
      livelloRaggiunto: 'Base',
      data: '2026-05-15'
    },
    {
      idValutazione: 5,
      codiceStudente: 'STU005',
      codiceEdizione: 'ED2026',
      voto: 7,
      livelloRaggiunto: 'Intermedio',
      data: '2026-05-10'
    },
    {
      idValutazione: 6,
      codiceStudente: 'STU006',
      codiceEdizione: 'ED2026',
      voto: 10,
      livelloRaggiunto: 'Eccellente',
      data: '2026-05-08'
    },
    {
      idValutazione: 7,
      codiceStudente: 'STU007',
      codiceEdizione: 'ED2026',
      voto: 4,
      livelloRaggiunto: 'Base',
      data: '2026-05-05'
    },
    {
      idValutazione: 8,
      codiceStudente: 'STU008',
      codiceEdizione: 'ED2026',
      voto: 9,
      livelloRaggiunto: 'Avanzato',
      data: '2026-05-03'
    },
    {
      idValutazione: 9,
      codiceStudente: 'STU009',
      codiceEdizione: 'ED2026',
      voto: 6,
      livelloRaggiunto: 'Intermedio',
      data: '2026-04-30'
    },
    {
      idValutazione: 10,
      codiceStudente: 'STU010',
      codiceEdizione: 'ED2026',
      voto: 3,
      livelloRaggiunto: 'Base',
      data: '2026-04-28'
    }
  ];
}
