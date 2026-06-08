import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ErrorStore } from '../store/error.store';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const errorStore = inject(ErrorStore);

  return next(req).pipe(
    catchError(err => {
      const msg = err?.error?.message || 'Errore durante la richiesta';
      errorStore.set(msg);
      return throwError(() => err);
    })
  );
};
