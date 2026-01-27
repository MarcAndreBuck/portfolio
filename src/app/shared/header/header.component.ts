import { Component, inject, signal, DestroyRef } from '@angular/core';
import { LanguageService } from '@/app/shared/i18n/language.service';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IconComponent } from '../icons/icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [RouterLink, IconComponent],
})
export class HeaderComponent {
  /** Provides the current language and allows switching between supported languages. */
  readonly lang = inject(LanguageService);

  /** Router instance used to read the current URL fragment and update active link state. */
  private readonly router = inject(Router);

  /** Ensures router subscription is cleaned up when the component is destroyed. */
  private readonly destroyRef = inject(DestroyRef);

  /** Controls whether the mobile menu is open. */
  readonly menuOpen = signal(false);

  /** Stores the currently active URL fragment (e.g. "about", "skills", "projects"). */
  activeFragment = '';

  /**
   * Subscribes to navigation events and keeps {@link activeFragment} in sync
   * with the current URL fragment so the header can highlight the active link.
   */
  constructor() {
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.activeFragment = this.router.parseUrl(this.router.url).fragment ?? '';
      });
  }

  /**
   * Switches the UI language.
   * @param code The language code to set ("de" or "en").
   */
  setLang(code: 'de' | 'en'): void {
    this.lang.setLang(code);
    this.closeMenu();
  }

  /**
   * Toggles the mobile menu open/closed.
   * Uses a signal update to flip the current boolean value.
   */
  toggleMenu(): void {
    this.menuOpen.update((v: boolean) => !v);
  }

  /** Closes the mobile menu. */
  closeMenu(): void {
    this.menuOpen.set(false);
  }

  /**
   * Handles clicks on mobile navigation items.
   * Closes the menu after navigation starts.
   */
  onNavClick(): void {
    this.closeMenu();
  }
}
