import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '@/app/shared/i18n/language.service';
import { IconComponent } from '@/app/shared/icons/icon.component';

/**
 * Single testimonial reference.
 */
type Reference = {
  author: string;
  role: string;
  text: string;
};

@Component({

  selector: 'app-reference',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferenceComponent {
  /** Language service providing translated content. */
  lang = inject(LanguageService);

  /** Index of the currently active testimonial. */
  activeIndex = 0;

  /**
   * Returns the list of testimonial references
   * from the current language dictionary.
   *
   * @returns Read-only list of references.
   */
  references(): readonly Reference[] {
    return this.lang.dict().references.items;
  }

  /**
   * Moves the carousel to the previous testimonial.
   */
  prev(): void {
    this.activeIndex = this.wrap(this.activeIndex - 1);
  }

  /**
   * Moves the carousel to the next testimonial.
   */
  next(): void {
    this.activeIndex = this.wrap(this.activeIndex + 1);
  }

  /**
   * Navigates directly to a specific testimonial.
   *
   * @param index Target testimonial index.
   */
  goTo(index: number): void {
    this.activeIndex = this.wrap(index);
  }

  /**
   * Activates a testimonial when a non-active card is clicked.
   *
   * @param i Index of the clicked card.
   */
  onCardClick(i: number): void {
    if (this.getCardState(i) !== 'active') this.goTo(i);
  }

  /**
   * Resolves the visual state of a testimonial card
   * relative to the active index.
   *
   * @param i Index of the card.
   * @returns Card state identifier.
   */
  getCardState(i: number): 'active' | 'prev' | 'next' | 'hidden' {
    const prev = this.wrap(this.activeIndex - 1);
    const next = this.wrap(this.activeIndex + 1);

    if (i === this.activeIndex) return 'active';
    if (i === prev) return 'prev';
    if (i === next) return 'next';
    return 'hidden';
  }

  /**
   * TrackBy function to optimize ngFor rendering.
   *
   * @param i Index of the item.
   * @returns Stable tracking value.
   */
  trackByIndex(i: number): number {
    return i;
  }

  /**
   * Wraps an index around the reference list length
   * to enable infinite carousel navigation.
   *
   * @param i Raw index value.
   * @returns Normalized index within bounds.
   */
  private wrap(i: number): number {
    const len = this.references().length;
    return len ? (i + len) % len : 0;
  }
}


