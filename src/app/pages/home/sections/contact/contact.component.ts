import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ActionButtonComponent } from '@/app/shared/ui/action-button/action-button.component';
import { IconComponent } from '@/app/shared/icons/icon.component';
import { LanguageService } from '@/app/shared/i18n/language.service';

/** All contact form fields. */
type ContactField = 'name' | 'email' | 'message' | 'privacy';

/** Fields with text input controls. */
type TextField = Exclude<ContactField, 'privacy'>;

/** Required-message keys per text field (i18n). */
type RequiredKeyByField = {
  name: 'required_name';
  email: 'required_email';
  message: 'required_message';
};

/** Keys used to resolve error messages from the dictionary. */
type ValidationMessageKey =
  | RequiredKeyByField[TextField]
  | 'email'
  | 'email_format'
  | 'minlength'
  | 'requiredTrue'
  | 'generic';

/** Payload sent to the contact API. */
type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

/**
 * Email format that requires a real domain with dot and TLD.
 * Example: name@example.com
 */
const EMAIL_REALISTIC_REGEX =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/** Example shown in the email format error message. */
const EMAIL_EXAMPLE = 'name@example.com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, RouterLink, ActionButtonComponent, IconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);
  readonly language = inject(LanguageService);

  /** True after the user tried to submit once. */
  hasSubmitted = false;

  /** Tracks whether a field was blurred at least once. */
  blurred: Record<ContactField, boolean> = {
    name: false,
    email: false,
    message: false,
    privacy: false,
  };

  /** Maps `required` validator to field-specific i18n keys. */
  private readonly requiredKeyByField: RequiredKeyByField = {
    name: 'required_name',
    email: 'required_email',
    message: 'required_message',
  };

  /**
   * Reactive contact form.
   * Text fields validate on blur, privacy checkbox validates on change.
   */
  readonly contactForm = this.fb.group(
    {
      name: this.fb.control('', {
        validators: [Validators.required, Validators.minLength(2)],
        updateOn: 'blur',
      }),
      email: this.fb.control('', {
        validators: [
          Validators.required,
          Validators.email,
          Validators.pattern(EMAIL_REALISTIC_REGEX),
        ],
        updateOn: 'blur',
      }),
      message: this.fb.control('', {
        validators: [Validators.required, Validators.minLength(10)],
        updateOn: 'blur',
      }),
      privacy: this.fb.control(false, {
        validators: [Validators.requiredTrue],
        updateOn: 'change',
      }),
    },
    { updateOn: 'blur' }
  );

  /**
   * Marks a field as blurred.
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
   * @returns The form control or null.
   */
  private getControl(field: ContactField) {
    return this.contactForm.get(field);
  }

  /**
   * Determines whether validation feedback should be visible.
   *
   * @param field Contact field name.
   * @returns True if validation should be shown.
   */
  private shouldShowValidation(field: ContactField): boolean {
    return this.hasSubmitted || this.blurred[field];
  }

  /**
   * Indicates whether all text fields are valid.
   *
   * @returns True if name, email and message are valid.
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
   *
   * @returns True if the privacy error should be visible.
   */
  private shouldShowPrivacyError(): boolean {
    const privacy = this.getControl('privacy');
    return !!privacy && this.areTextFieldsValid && privacy.invalid;
  }

  /**
   * Checks whether a field currently has a visible validation error.
   *
   * @param field Contact field name.
   * @returns True if the field is invalid and should show an error.
   */
  hasFieldError(field: ContactField): boolean {
    if (field === 'privacy') return this.shouldShowPrivacyError();
    const control = this.getControl(field);
    return !!control && this.shouldShowValidation(field) && control.invalid;
  }

  /**
   * Maps Angular validation errors to translation keys.
   *
   * @param field Contact field name.
   * @returns Validation message key or null.
   */
  private getErrorKey(field: ContactField): ValidationMessageKey | null {
    const control = this.getControl(field);
    if (!control || !this.hasFieldError(field)) return null;

    if (field === 'privacy' && control.hasError('requiredTrue')) {
      return 'requiredTrue';
    }

    if (field !== 'privacy' && control.hasError('required')) {
      return this.requiredKeyByField[field];
    }

    if (field === 'email' && control.hasError('pattern')) {
      return 'email_format';
    }

    if (field === 'email' && control.hasError('email')) {
      return 'email';
    }

    if (control.hasError('minlength')) {
      return 'minlength';
    }

    return 'generic';
  }

  /**
  * Returns the localized error message for a field.
  *
  * @param field Contact field name.
  * @returns Localized error message (always a string).
  */
  getErrorMessage(field: ContactField): string {
    const key = this.getErrorKey(field);
    if (!key) return '';

    const entry = this.language.dict().contact.errors[key];
    return typeof entry === 'function' ? entry(EMAIL_EXAMPLE) : entry;
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
   * Determines whether the placeholder error should be shown.
   *
   * @param field Text field name.
   * @returns True if placeholder error should be shown.
   */
  showPlaceholderError(field: TextField): boolean {
    return this.hasFieldError(field) && this.isEmptyTextField(field);
  }

  /**
   * Determines whether the inline error message should be shown.
   *
   * @param field Text field name.
   * @returns True if inline error should be shown.
   */
  showInlineError(field: TextField): boolean {
    return this.hasFieldError(field) && !this.isEmptyTextField(field);
  }

  /**
   * Returns the placeholder or error message for a field.
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
   *
   * @returns Promise<void>
   */
  async submit(): Promise<void> {
    this.hasSubmitted = true;

    if (this.contactForm.invalid) {
      this.markAllFieldsAsBlurred();
      return;
    }

    await this.sendContact(this.getPayload());
    this.resetFormState();
  }

  /**
   * Indicates whether the form can be submitted.
   *
   * @returns True if the form is valid.
   */
  get canSubmitForm(): boolean {
    return this.contactForm.valid;
  }

  /**
   * Marks all fields as blurred.
   */
  private markAllFieldsAsBlurred(): void {
    (Object.keys(this.blurred) as ContactField[]).forEach(
      (f) => (this.blurred[f] = true)
    );
  }

  /**
   * Resets the form and UI state.
   */
  private resetFormState(): void {
    this.contactForm.reset({ privacy: false });
    this.hasSubmitted = false;
    (Object.keys(this.blurred) as ContactField[]).forEach(
      (f) => (this.blurred[f] = false)
    );
  }

  /**
   * Creates the API payload from form values.
   *
   * @returns ContactPayload
   */
  private getPayload(): ContactPayload {
    const { name, email, message } = this.contactForm.getRawValue();
    return { name: name!, email: email!, message: message! };
  }

  /**
   * Sends the contact request to the backend.
   *
   * @param payload Contact data.
   * @returns Promise<void>
   */
  private async sendContact(payload: ContactPayload): Promise<void> {
    const url = 'https://marc-buck.de/api/sendMail.php';
    await firstValueFrom(this.http.post<void>(url, payload));
  }
}
