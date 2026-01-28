import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

import { Project } from '../projects.data';
import { ButtonComponent } from '@/app/shared/ui/link-button/link-button.component';
import { IconComponent } from '@/app/shared/icons/icon.component';
import type { SkillKey } from '@/app/shared/skills/skills.data';
import type { IconName } from '@/app/shared/icons/icons.templates';

type StackItem = { key: SkillKey; icon: IconName; label: string };

type ProjectModalVm = {
  project: Project;
  indexLabel: string;
  description: string;
  previewSrc: string;
  stackItems: StackItem[];
  i18n: {
    closeLabel: string;
    subtitle: string;
    opensNewTab: string;
    next: string;
    previewAlt: string;
    actions: {
      github: string;
      live: string;
    };
  };
};

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule, ButtonComponent, IconComponent, A11yModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss',
})
export class ProjectModalComponent implements OnInit, OnDestroy {
  /** Modal view model containing all UI-ready data for this modal. */
  @Input({ required: true }) vm!: ProjectModalVm;

  /**
   * Element to restore focus to after the modal closes.
   * Useful for keyboard users and overall a11y.
   */
  @Input() returnFocusTo: HTMLElement | null = null;

  /** Emits when the modal should close. */
  @Output() close = new EventEmitter<void>();

  /**
   * Emits when user requests the next project.
   * @returns MouseEvent from the triggering button.
   */
  @Output() next = new EventEmitter<MouseEvent>();

  /** Unique id used for aria-labelledby. */
  readonly titleId = `pm-title-${Math.random().toString(16).slice(2)}`;

  /** Unique id used for aria-describedby. */
  readonly descId = `pm-desc-${Math.random().toString(16).slice(2)}`;

  /** Enables scroll lock while the modal is mounted. */
  ngOnInit(): void {
    this.setScrollLock(true);
  }

  /** Disables scroll lock and restores focus to the trigger element. */
  ngOnDestroy(): void {
    this.setScrollLock(false);
    this.returnFocusTo?.focus();
  }

  /** Closes the modal when the user clicks the backdrop. */
  onBackdropClick(): void {
    this.close.emit();
  }

  /**
   * Stops click bubbling so clicking inside the card does not close the modal.
   * @param e Mouse event.
   */
  onCardClick(e: MouseEvent): void {
    e.stopPropagation();
  }

  /**
   * Closes the modal via the close button.
   * @param e Mouse event.
   */
  onCloseClick(e: MouseEvent): void {
    e.stopPropagation();
    this.close.emit();
  }

  /**
   * Requests the next project (modal navigation).
   * @param e Mouse event (passed through for parent handling).
   */
  onNextClick(e: MouseEvent): void {
    e.stopPropagation();
    this.next.emit(e);
  }

  /** Closes the modal when Escape is pressed. */
  @HostListener('document:keydown.escape')
  onEsc(): void {
    this.close.emit();
  }

  /**
   * Toggles scroll locking by applying a class on `body`.
   * @param isLocked Whether scrolling should be locked.
   * @private
   */
  private setScrollLock(isLocked: boolean): void {
    document.body.classList.toggle('is-modal-open', isLocked);
  }
}
