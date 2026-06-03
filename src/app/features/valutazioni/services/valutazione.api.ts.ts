import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { ValutazioneRTO } from '../models/valutazione.model';

@Injectable({
  providedIn: 'root',
})
export class ValutazioneApi {
  private http = inject(HttpClient)
  private baseUrl = environment.apiBaseUrl;

  getAll(): Observable<ValutazioneRTO[]> {
    return this.http.get<ValutazioneRTO[]>(`${this.baseUrl}/valutazioni`);
  }
}
