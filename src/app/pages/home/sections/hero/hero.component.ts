import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '@/app/shared/i18n/language.service';
import { MarqueeComponent } from '@/app/shared/ui/marquee/marquee.component';
import { IconComponent } from '@/app/shared/icons/icon.component';
import { ButtonComponent } from '@/app/shared/ui/link-button/link-button.component';
import { IDENTITY, SOCIAL_LINKS, MARQUEE_DURATION } from '@/app/shared/identity.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, MarqueeComponent, IconComponent, ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  /** App language service (i18n dictionary access). */
  readonly lang = inject(LanguageService);

  /** Static identity data used in the hero section. */
  readonly identity = IDENTITY;

  /** Social links displayed in the hero section. */
  readonly socialLinks = SOCIAL_LINKS;

  /** Marquee animation duration (ms). */
  readonly marqueeDuration = MARQUEE_DURATION;

  /**
   * Returns an accessible label for a social link icon.
   * Falls back to the given label if no mapping exists.
   *
   * @param label Visible label (e.g. "GitHub", "LinkedIn").
   * @returns ARIA label string.
   */
  getSocialAria(label: string): string {
    const key = label.toLowerCase();
    if (key === 'github') return this.lang.dict().hero.aria.github;
    if (key === 'linkedin') return this.lang.dict().hero.aria.linkedin;
    return label;
  }
}
