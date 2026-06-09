import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private counter = signal(0);

  readonly isLoading = signal(false);

  start() {
    this.counter.update(v => v + 1);
    this.isLoading.set(true);
  }

  stop() {
    this.counter.update(v => Math.max(0, v-1));
    if (this.counter() === 0) {
      this.isLoading.set(false);
    }
  }
}
