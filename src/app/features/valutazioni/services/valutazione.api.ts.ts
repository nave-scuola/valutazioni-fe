import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { ValutazioneRTO, ValutazioneTO } from '../models/valutazione.model';

@Injectable({
  providedIn: 'root',
})
export class ValutazioneApi {
  private http = inject(HttpClient)
  private baseUrl = environment.apiBaseUrl;

  getAll(): Observable<ValutazioneRTO[]> {
    return this.http.get<ValutazioneRTO[]>(`${this.baseUrl}/valutazioni`);
  }

  getById(id: number): Observable<ValutazioneRTO>{
    return this.http.get<ValutazioneRTO>(`${this.baseUrl}/valutazioni/${id}`);
  }

  create(body: ValutazioneTO): Observable<ValutazioneRTO> {
    return this.http.post<ValutazioneRTO>(`${this.baseUrl}/valutazioni`, body);
  }

  update(id: number, body: ValutazioneTO): Observable<ValutazioneRTO>{
    return this.http.put<ValutazioneRTO>(`${this.baseUrl}/valutazioni/${id}`, body);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/valutazioni/${id}`);
  }
}
