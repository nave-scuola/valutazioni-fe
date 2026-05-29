import { Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtro-valutazioni',
  imports: [ReactiveFormsModule],
  templateUrl: './filtro-valutazioni.html',
  styleUrl: './filtro-valutazioni.css',
})
export class FiltroValutazioni {

  private fb = inject(FormBuilder);

  filtroForm = this.fb.nonNullable.group({
    voto: [''],
    data: [''],
  });

  filtroApplicato = output<{ voto: string; data: string }>();
  
  onSubmit(): void {
    if (this.filtroForm.valid) this.filtroApplicato.emit(this.filtroForm.getRawValue());
  }
  
  onReset(): void {
    this.filtroForm.reset();
    this.filtroApplicato.emit(this.filtroForm.getRawValue());
  }
}
