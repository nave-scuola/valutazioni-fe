import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ValutazioneFacade } from '../../services/valutazione-facade';
import { REGEX_CODICE_EDIZIONE, REGEX_CODICE_STUDENTE } from '../../models/validation.constant';

@Component({
  selector: 'app-form-valutazioni',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './form-valutazioni.html',
  styleUrl: './form-valutazioni.css',
})
export class FormValutazioni {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private facade = inject(ValutazioneFacade);

  id = Number(this.route.snapshot.paramMap.get('id'));

  form = this.fb.nonNullable.group({
    codiceStudente: this.fb.nonNullable.control<string>('', {
      validators: [
        Validators.required,
        Validators.pattern(REGEX_CODICE_STUDENTE)
      ]
    }),

    codiceEdizione: this.fb.nonNullable.control<string>('', {
      validators: [
        Validators.required,
        Validators.pattern(REGEX_CODICE_EDIZIONE)
      ]
    }),

    voto: this.fb.nonNullable.control<number | null>(null, {
      validators: [
        Validators.required,
        Validators.min(1),
        Validators.max(10)
      ]
    }),

    livelloRaggiunto: this.fb.nonNullable.control<string>('', {
      validators: [Validators.required]
    }),

    commento: this.fb.control<string | null>(null)
  });

  ngOnInit(): void {
    if (this.id) {
      this.facade.valutazione();
      const v = this.facade.valutazione();
      if (v) this.form.patchValue(v);
    }
  }

  salva(): void {
    this.facade.salva(this.form, this.id);
  }

  elimina(): void {
    if (this.id) this.facade.elimina(this.id);
  }
}
