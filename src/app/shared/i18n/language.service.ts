import { Injectable, computed, signal } from '@angular/core';
import { DEFAULT_LANG, isLang, Lang, I18N } from './i18n';

const STORAGE_KEY = 'lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly _lang = signal<Lang>(this.readInitialLang());

  readonly lang = computed(() => this._lang());
  readonly isDe = computed(() => this._lang() === 'de');
  readonly isEn = computed(() => this._lang() === 'en');
  readonly heroMarquee = computed(() => I18N[this._lang()].hero.marquee);

  setLang(lang: Lang): void {
    this._lang.set(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }

  toggleLang(): void {
    this.setLang(this._lang() === 'de' ? 'en' : 'de');
  }

  private readInitialLang(): Lang {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLang(stored)) return stored;

    const browser = (navigator.language || '').toLowerCase();
    if (browser.startsWith('de')) return 'de';

    return DEFAULT_LANG;
  }


}
