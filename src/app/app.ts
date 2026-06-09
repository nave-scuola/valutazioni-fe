import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { LoadingService } from './core/services/loading.service';
import { ErrorStore } from './core/store/error.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'valutazioni-fe';

  private document = inject(DOCUMENT);

  loadingService = inject(LoadingService);
  errorStore = inject(ErrorStore);

  toggleDarkMode(event: any) {
    this.document.body.classList.toggle('dark-mode');
  }
}


