export interface ValutazioneRTO {
  idValutazione: number;
  codiceStudente: string;
  codiceEdizione: string;
  voto: number;
  livelloRaggiunto: string;
  data: string;
}

export interface ValutazioneTO {
  codiceStudente: string;
  codiceEdizione: string;
  voto: number;
  livelloRaggiunto: string;
  commento?: string; 
}