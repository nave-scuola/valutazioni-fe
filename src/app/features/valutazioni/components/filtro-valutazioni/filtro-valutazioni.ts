import { Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-filtro-valutazioni',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './filtro-valutazioni.html',
  styleUrl: './filtro-valutazioni.css',
})
export class FiltroValutazioni {

  private fb = inject(FormBuilder);

  filtroForm = this.fb.nonNullable.group({
    studente: [''],
    voto: [''],
    data: [''],
  });

  filtroApplicato = output<{ studente: string; voto: string; data: string }>();
  
  onSubmit(): void {
    if (!this.filtroForm.valid) return;

    const raw = this.filtroForm.getRawValue();

    const voto = raw.voto ? raw.voto.toString() : '';
    const data = raw.data ? raw.data.toString().substring(0, 10) : '';

    this.filtroApplicato.emit({
      studente: raw.studente ?? '',
      voto,
      data
    });
  }
  
  onReset(): void {
    this.filtroForm.reset();

    this.filtroApplicato.emit({
      studente: '',
      voto: '',
      data: ''
    });
  }
}

