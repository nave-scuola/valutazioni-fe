import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorStore {
  readonly error = signal<String | null>(null);

  set(message: string) {
    this.error.set(message);
  }

  clear() {
    this.error.set(null);
  }
}
