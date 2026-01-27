import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { LanguageService } from '@/app/shared/i18n/language.service';
import { ActionButtonComponent } from '@/app/shared/ui/action-button/action-button.component';
import { IconComponent } from '@/app/shared/icons/icon.component';

/**
 * All available contact form fields.
 */
type ContactField = 'name' | 'email' | 'message' | 'privacy';

/**
 * Contact fields that contain text input.
 */
type TextField = Exclude<ContactField, 'privacy'>;

/**
 * Supported validation error keys used for i18n mapping.
 */
type ValidationErrorKey =
  | 'required'
  | 'email'
  | 'minlength'
  | 'requiredTrue'
  | 'generic';

/**
 * Payload sent to the contact API.
 */
type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, RouterLink, ActionButtonComponent, IconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly http = inject(HttpClient);
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

  /**
   * Reactive contact form.
   * Text fields validate on blur, privacy checkbox validates on change.
   */
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

  /**
   * Marks a field as blurred once.
   * Used to control when validation errors become visible.
   *
   * @param field Contact field name.
   */
  markFieldAsBlurred(field: ContactField): void {
    this.blurred[field] = true;
  }

  /**
   * Returns the form control for a given field.
   *
   * @param field Contact field name.
   * @returns Form control or null.
   */
  private getControl(field: ContactField) {
    return this.contactForm.get(field);
  }

  /**
   * Determines whether validation feedback should be shown.
   *
   * @param field Contact field name.
   * @returns True if validation should be visible.
   */
  private shouldShowValidation(field: ContactField): boolean {
    return this.hasSubmitted || this.blurred[field];
  }

  /**
   * True if all text fields are valid.
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
   * Determines whether the privacy checkbox error should be shown.
   * Only visible after all text fields are valid.
   */
  private shouldShowPrivacyError(): boolean {
    const privacy = this.getControl('privacy');
    return !!privacy && this.areTextFieldsValid && privacy.invalid;
  }

  /**
   * Returns whether a field currently has a visible validation error.
   *
   * @param field Contact field name.
   * @returns True if the field should show an error state.
   */
  hasFieldError(field: ContactField): boolean {
    if (field === 'privacy') return this.shouldShowPrivacyError();
    const control = this.getControl(field);
    return !!control && this.shouldShowValidation(field) && control.invalid;
  }

  /**
   * Maps validation errors to translation keys.
   *
   * @param field Contact field name.
   * @returns Validation error key or null.
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
   * Returns the localized error message for a field.
   *
   * @param field Contact field name.
   * @returns Translated error message or empty string.
   */
  getErrorMessage(field: ContactField): string {
    const key = this.getErrorKey(field);
    return key ? this.language.dict().contact.errors[key] : '';
  }

  /**
   * Checks whether a text field is empty (trimmed).
   *
   * @param field Text field name.
   * @returns True if the field is empty.
   */
  private isEmptyTextField(field: TextField): boolean {
    const value = this.getControl(field)?.value;
    return value === null || value === undefined || String(value).trim() === '';
  }

  /**
   * Shows placeholder error if the field is empty and invalid.
   *
   * @param field Text field name.
   * @returns True if placeholder error should be shown.
   */
  showPlaceholderError(field: TextField): boolean {
    return this.hasFieldError(field) && this.isEmptyTextField(field);
  }

  /**
   * Shows inline error text if the field is invalid but not empty.
   *
   * @param field Text field name.
   * @returns True if inline error should be shown.
   */
  showInlineError(field: TextField): boolean {
    return this.hasFieldError(field) && !this.isEmptyTextField(field);
  }

  /**
   * Returns either the localized placeholder or the localized error message.
   *
   * @param field Text field name.
   * @returns Placeholder text.
   */
  getPlaceholder(field: TextField): string {
    return this.showPlaceholderError(field)
      ? this.getErrorMessage(field)
      : this.language.dict().contact.placeholders[field];
  }

  /**
   * Handles form submission.
   * Marks all fields as blurred on invalid submit.
   * Sends the contact payload to the backend on success.
   */
  async submit(): Promise<void> {
    this.hasSubmitted = true;

    if (this.contactForm.invalid) {
      this.markAllFieldsAsBlurred();
      return;
    }

    const payload = this.getPayload();
    await this.sendContact(payload);
    this.resetFormState();
  }

  /**
   * Returns true if the form is valid and can be submitted.
   */
  get canSubmitForm(): boolean {
    return this.contactForm.valid;
  }

  /**
   * Marks all fields as blurred.
   */
  private markAllFieldsAsBlurred(): void {
    (Object.keys(this.blurred) as ContactField[]).forEach(
      (field) => (this.blurred[field] = true)
    );
  }

  /**
   * Resets the form and all related UI state.
   */
  private resetFormState(): void {
    this.contactForm.reset({ privacy: false });
    this.hasSubmitted = false;
    (Object.keys(this.blurred) as ContactField[]).forEach(
      (field) => (this.blurred[field] = false)
    );
  }

  /**
   * Creates the contact payload from form values.
   *
   * @returns ContactPayload containing name, email and message.
   */
  private getPayload(): ContactPayload {
    const { name, email, message } = this.contactForm.getRawValue();
    return { name: name!, email: email!, message: message! };
  }

  /**
   * Sends the contact request to the backend API.
   *
   * @param payload Contact data to send.
   * @throws Error if the request fails.
   */
  private async sendContact(payload: ContactPayload): Promise<void> {
    const url = 'https://marc-buck.de/api/sendMail.php';
    await firstValueFrom(this.http.post<void>(url, payload));
  }
}
