import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LanguageService } from '@/app/shared/i18n/language.service';
import { ActionButtonComponent } from '@/app/shared/ui/action-button/action-button.component';
import { IconComponent } from '@/app/shared/icons/icon.component';

type ContactField = 'name' | 'email' | 'message' | 'privacy';
type TextField = Exclude<ContactField, 'privacy'>;

type ValidationErrorKey =
  | 'required'
  | 'email'
  | 'minlength'
  | 'requiredTrue'
  | 'generic';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, RouterLink, ActionButtonComponent, IconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly formBuilder = inject(FormBuilder);
  readonly language = inject(LanguageService);

  /** True after the user tried to submit at least once. */
  hasSubmitted = false;

  /** Tracks whether a field was blurred at least once (per field). */
  blurred: Record<ContactField, boolean> = {
    name: false,
    email: false,
    message: false,
    privacy: false,
  };

  /** Reactive form with blur-based validation for text fields and change-based for privacy. */
  readonly contactForm = this.formBuilder.group(
    {
      name: this.formBuilder.control('', {
        validators: [Validators.required, Validators.minLength(2)],
        updateOn: 'blur',
      }),
      email: this.formBuilder.control('', {
        validators: [Validators.required, Validators.email],
        updateOn: 'blur',
      }),
      message: this.formBuilder.control('', {
        validators: [Validators.required, Validators.minLength(10)],
        updateOn: 'blur',
      }),
      privacy: this.formBuilder.control(false, {
        validators: [Validators.requiredTrue],
        updateOn: 'change',
      }),
    },
    { updateOn: 'blur' }
  );

  /* ----------------------------------
     Basic helpers
  ---------------------------------- */

  /**
   * Marks a field as "blurred once" to enable error display on that field.
   * @param field Field name to mark as blurred.
   */
  markFieldAsBlurred(field: ContactField): void {
    this.blurred[field] = true;
  }

  /**
   * Returns the form control for the given field.
   * @param field Field name.
   * @returns The control instance or null.
   */
  private getControl(field: ContactField) {
    return this.contactForm.get(field);
  }

  /**
   * Returns true if errors for a field should be shown (blurred or submit tried).
   * @param field Field name.
   * @returns Whether validation feedback should be visible.
   */
  private shouldShowValidation(field: ContactField): boolean {
    return this.hasSubmitted || this.blurred[field];
  }

  /**
   * True if all three text fields are valid.
   * Used to decide when to show the privacy checkbox error.
   */
  get areTextFieldsValid(): boolean {
    return !!(
      this.getControl('name')?.valid &&
      this.getControl('email')?.valid &&
      this.getControl('message')?.valid
    );
  }

  /**
   * Shows the privacy error only after all text fields are valid
   * and the privacy checkbox is still unchecked.
   * @returns Whether to show the privacy error.
   */
  private shouldShowPrivacyError(): boolean {
    const privacy = this.getControl('privacy');
    return !!privacy && this.areTextFieldsValid && privacy.invalid;
  }

  /**
   * Returns true if a field currently has a visible error.
   * Privacy uses a special rule (only after all text fields are valid).
   * @param field Field name.
   * @returns Whether the field should show an error state.
   */
  hasFieldError(field: ContactField): boolean {
    if (field === 'privacy') return this.shouldShowPrivacyError();

    const control = this.getControl(field);
    return !!control && this.shouldShowValidation(field) && control.invalid;
  }

  /* ----------------------------------
     Error handling (i18n)
  ---------------------------------- */

  /**
   * Maps control errors to a translation key.
   * @param field Field name.
   * @returns Error key or null if no visible error.
   */
  private getErrorKey(field: ContactField): ValidationErrorKey | null {
    const control = this.getControl(field);
    if (!control || !this.hasFieldError(field)) return null;

    if (field === 'privacy' && control.hasError('requiredTrue')) return 'requiredTrue';
    if (control.hasError('required')) return 'required';
    if (field === 'email' && control.hasError('email')) return 'email';
    if (control.hasError('minlength')) return 'minlength';

    return 'generic';
  }

  /**
   * Returns the translated error message for a field.
   * @param field Field name.
   * @returns Localized error message or empty string.
   */
  getErrorMessage(field: ContactField): string {
    const key = this.getErrorKey(field);
    return key ? this.language.dict().contact.errors[key] : '';
  }

  /* ----------------------------------
     UX helpers
  ---------------------------------- */

  /**
   * Checks if a text field is empty (trimmed).
   * @param field Text field name.
   * @returns True if empty.
   */
  private isEmptyTextField(field: TextField): boolean {
    const value = this.getControl(field)?.value;
    return value === null || value === undefined || String(value).trim() === '';
  }

  /**
   * Shows placeholder error for text fields only if empty and invalid.
   * @param field Text field name.
   * @returns Whether to show error inside the placeholder.
   */
  showPlaceholderError(field: TextField): boolean {
    return this.hasFieldError(field) && this.isEmptyTextField(field);
  }

  /**
   * Shows inline error text for text fields if invalid and not empty.
   * @param field Text field name.
   * @returns Whether to show an inline error label.
   */
  showInlineError(field: TextField): boolean {
    return this.hasFieldError(field) && !this.isEmptyTextField(field);
  }

  /**
   * Returns either the localized placeholder or the localized error message.
   * @param field Text field name.
   * @returns Placeholder text.
   */
  getPlaceholder(field: TextField): string {
    return this.showPlaceholderError(field)
      ? this.getErrorMessage(field)
      : this.language.dict().contact.placeholders[field];
  }

  /* ----------------------------------
     Submit
  ---------------------------------- */

  /**
   * Submits the form. Marks all fields blurred on invalid submit.
   */
  submit(): void {
    this.hasSubmitted = true;

    if (this.contactForm.invalid) {
      this.markAllFieldsAsBlurred();
      return;
    }

    // TODO: send form data
    this.resetFormState();
  }

  /**
   * True if the form can be submitted (all fields valid + privacy checked).
   */
  get canSubmitForm(): boolean {
    return this.contactForm.valid;
  }

  /**
   * Marks every field as blurred so all relevant errors can show.
   */
  private markAllFieldsAsBlurred(): void {
    (Object.keys(this.blurred) as ContactField[]).forEach((field) => (this.blurred[field] = true));
  }

  /**
   * Resets the form and UI state after a successful submit.
   */
  private resetFormState(): void {
    this.contactForm.reset({ privacy: false });
    this.hasSubmitted = false;
    (Object.keys(this.blurred) as ContactField[]).forEach((field) => (this.blurred[field] = false));
  }
}
