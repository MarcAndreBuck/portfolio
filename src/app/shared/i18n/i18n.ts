import { DE } from './de';
import { EN } from './en';

export type Lang = 'de' | 'en';

export const SUPPORTED_LANGS: readonly Lang[] = ['de', 'en'] as const;
export const DEFAULT_LANG: Lang = 'en';

export const I18N = {
    de: DE,
    en: EN,
} as const;

export function isLang(value: string | null): value is Lang {
    return value === 'en' || value === 'de';
}
