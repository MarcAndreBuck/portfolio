import { Component, Input } from '@angular/core';

export type ActionButtonType = 'button' | 'submit' | 'reset';
export type ActionButtonVariant = 'simple' | 'marquee';

@Component({
  selector: 'app-action-button',
  standalone: true,
  imports: [],
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.scss',
})
export class ActionButtonComponent {
  /** Button purpose (submit for forms, button for actions). */
  @Input() type: ActionButtonType = 'button';

  /** Disable button interactions and apply disabled styles. */
  @Input() disabled = false;

  /** Accessibility label when the visible text is not enough (e.g. icon-only). */
  @Input() ariaLabel: string | null = null;

  /** Optional: keep parity with your design variants. */
  @Input() variant: ActionButtonVariant = 'simple';
}
