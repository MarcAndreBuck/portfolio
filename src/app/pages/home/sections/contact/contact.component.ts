import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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

/** Feedback state shown after submit. */
type FeedbackState = 'idle' | 'success' | 'error';

/**
 * Email format that requires a real domain with dot and TLD.
 * Example: name@example.com
 */
const EMAIL_REALISTIC_REGEX =
  /^(?=.*[a-zA-Z0-9])[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 * Ensures that the input contains at least two letters.
 * Prevents values that consist only of whitespace, digits, or special characters.
 */
const NAME_MIN_2_LETTERS_REGEX =
  /^(?=(?:.*[A-Za-zÀ-ÖØ-öø-ÿ]){2,}).+$/;

/**
 * Ensures that the input contains at least one non-whitespace character.
 * Prevents values that consist only of spaces, tabs or line breaks.
 */
const NOT_ONLY_WHITESPACE_REGEX = /^(?=.*\S).+$/;

/** Example shown in the email format error message. */
const EMAIL_EXAMPLE = 'name@example.com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    RouterLink,
    ActionButtonComponent,
    IconComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);
  readonly language = inject(LanguageService);

  /** True after the user tried to submit once. */
  hasSubmitted = false;

  /** Success/error feedback shown briefly after submit. */
  feedback: FeedbackState = 'idle';

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

  /** Timer to auto-hide the feedback message. */
  private feedbackTimer: ReturnType<typeof setTimeout> | null = null;

  /**
   * Reactive contact form.
   * Text fields validate on blur, privacy checkbox validates on change.
   */
  readonly contactForm = this.fb.group(
    {
      name: this.fb.control('', {
        validators: [Validators.required, Validators.minLength(2), Validators.pattern(NAME_MIN_2_LETTERS_REGEX)],
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
        validators: [Validators.required, Validators.minLength(10), Validators.pattern(NOT_ONLY_WHITESPACE_REGEX)],
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
   * Handles form submission.
   *
   * @returns Promise<void>
   */
  async submit(): Promise<void> {
    this.hasSubmitted = true;
    if (this.contactForm.invalid) return this.onInvalidSubmit();

    try {
      await this.sendContact(this.getPayload());
      this.onSubmitSuccess();
    } catch {
      this.onSubmitError();
    }
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
   * Returns the placeholder or error message for a text field.
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
   * Handles invalid submission by revealing errors.
   */
  private onInvalidSubmit(): void {
    this.markAllFieldsAsBlurred();
    this.setFeedback('error');
  }

  /**
   * Handles the success flow after sending the message.
   */
  private onSubmitSuccess(): void {
    this.setFeedback('success');
    this.resetFormState();
  }

  /**
   * Handles the error flow after sending the message.
   */
  private onSubmitError(): void {
    this.setFeedback('error');
  }

  /**
   * Sets feedback and schedules auto-hide.
   *
   * @param state Feedback state.
   */
  private setFeedback(state: FeedbackState): void {
    this.feedback = state;
    this.resetFeedbackTimer();
    if (state !== 'idle') this.scheduleFeedbackHide();
  }

  /**
   * Clears any running feedback timer.
   */
  private resetFeedbackTimer(): void {
    if (!this.feedbackTimer) return;
    clearTimeout(this.feedbackTimer);
    this.feedbackTimer = null;
  }

  /**
   * Hides feedback after a short delay.
   */
  private scheduleFeedbackHide(ms = 3500): void {
    this.feedbackTimer = setTimeout(() => (this.feedback = 'idle'), ms);
  }

  /**
   * Returns the form control for a given field.
   *
   * @param field Contact field name.
   * @returns The control or null.
   */
  private getControl(field: ContactField): AbstractControl | null {
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
   * Determines whether the privacy checkbox error should be shown.
   *
   * @returns True if the privacy error should be visible.
   */
  private shouldShowPrivacyError(): boolean {
    const privacy = this.getControl('privacy');
    return !!privacy && this.areTextFieldsValid && privacy.invalid;
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

    return (
      this.getPrivacyErrorKey(field, control) ??
      this.getRequiredErrorKey(field, control) ??
      this.getEmailErrorKey(field, control) ??
      this.getMinLengthErrorKey(control) ??
      'generic'
    );
  }

  /**
   * Resolves the privacy checkbox error key.
   */
  private getPrivacyErrorKey(
    field: ContactField,
    control: AbstractControl
  ): ValidationMessageKey | null {
    if (field !== 'privacy') return null;

    if (control.hasError('requiredTrue')) return 'requiredTrue';
    if (control.hasError('required')) return 'requiredTrue';

    return null;
  }

  /**
   * Resolves the required-validator error key for text fields.
   */
  private getRequiredErrorKey(
    field: ContactField,
    control: AbstractControl
  ): ValidationMessageKey | null {
    if (field === 'privacy') return null;
    if (!control.hasError('required')) return null;
    return this.requiredKeyByField[field];
  }

  /**
   * Resolves email-specific error keys.
   */
  private getEmailErrorKey(
    field: ContactField,
    control: AbstractControl
  ): ValidationMessageKey | null {
    if (field !== 'email') return null;
    if (control.hasError('pattern')) return 'email_format';
    return control.hasError('email') ? 'email' : null;
  }

  /**
   * Resolves the minlength error key.
   */
  private getMinLengthErrorKey(
    control: AbstractControl
  ): ValidationMessageKey | null {
    return control.hasError('minlength') ? 'minlength' : null;
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
    const url = 'https://marc-buck.dev/api/sendMail.php';
    await firstValueFrom(this.http.post<void>(url, payload));
  }
}
