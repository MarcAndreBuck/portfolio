import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { NgIf, NgClass } from '@angular/common';
import { LanguageService } from '@/app/shared/i18n/language.service';

type FieldKey = 'name' | 'email' | 'message' | 'privacy';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  lang = inject(LanguageService);
  private fb = new FormBuilder();

  submitted = false;

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    privacy: [false, Validators.requiredTrue],
  });

  get canClickSubmit(): boolean {
    const { name, email, message } = this.form.controls;
    return name.valid && email.valid && message.valid;
  }

  submit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log('payload', this.form.value);

    this.form.reset({ privacy: false });
    this.submitted = false;
  }

  showError(field: FieldKey): boolean {
    const c = this.form.controls[field];

    if (field === 'privacy') return this.submitted && c.invalid;

    return c.invalid && (c.touched || this.submitted);
  }

  errorText(field: FieldKey): string {
    const c = this.form.controls[field];
    const e = this.lang.dict().contact.errors;

    if (field === 'privacy') return e.privacyRequired;

    if (c.hasError('required')) {
      if (field === 'name') return e.nameRequired;
      if (field === 'email') return e.emailRequired;
      return e.messageRequired;
    }

    if (c.hasError('minlength')) {
      if (field === 'name') return e.nameMin;
      return e.messageMin;
    }

    if (c.hasError('email')) return e.emailInvalid;

    return '';
  }
}
