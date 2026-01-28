import { Injectable, computed, signal } from '@angular/core';
import { DEFAULT_LANG, isLang, Lang, I18N } from './i18n';

const STORAGE_KEY = 'lang';

/**
 * Central language service for reading, persisting and switching the UI language.
 * It also keeps the document `<html lang="...">` attribute in sync for proper
 * accessibility, hyphenation and browser behavior.
 */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  /**
   * Current language as a writable signal.
   * Initialized once from storage or browser language and applied to `<html lang>`.
   */
  private readonly _lang = signal<Lang>(
    (() => {
      const lang = this.readInitialLang();
      document.documentElement.lang = lang;
      return lang;
    })()
  );

  /** Current language code ("de" | "en"). */
  readonly lang = computed(() => this._lang());

  /** True if the active language is German. */
  readonly isDe = computed(() => this._lang() === 'de');

  /** True if the active language is English. */
  readonly isEn = computed(() => this._lang() === 'en');

  /** Convenience accessor for the hero marquee strings in the active language. */
  readonly heroMarquee = computed(() => I18N[this._lang()].hero.marquee);

  /** Full i18n dictionary for the active language. */
  readonly dict = computed(() => I18N[this._lang()]);

  /**
   * Sets the active language, persists it and updates the document language.
   *
   * @param lang Language code to set ("de" | "en").
   */
  setLang(lang: Lang): void {
    this._lang.set(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    this.applyLangToDocument(lang);
  }

  /**
   * Toggles between German and English.
   */
  toggleLang(): void {
    this.setLang(this._lang() === 'de' ? 'en' : 'de');
  }

  /**
   * Resolves the initial language.
   * Priority:
   * 1) Stored language in localStorage (if valid)
   * 2) Browser language (if it starts with "de")
   * 3) Fallback to {@link DEFAULT_LANG}
   *
   * @returns The initial language code.
   */
  private readInitialLang(): Lang {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLang(stored)) return stored;

    const browser = (navigator.language || '').toLowerCase();
    if (browser.startsWith('de')) return 'de';

    return DEFAULT_LANG;
  }

  /**
   * Updates the document `<html lang="...">` attribute.
   *
   * @param lang Language code to apply.
   */
  private applyLangToDocument(lang: Lang): void {
    document.documentElement.lang = lang;
  }
}
