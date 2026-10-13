import type { Locale } from './config';

/** Kurze UI-Strings für Nav, Footer, Language Switcher und Legal-Seiten. */
type Ui = {
  language: string;
  languageDe: string;
  languageEn: string;
  imprint: string;
  privacy: string;
  cookies: string;
  legalNav: string;
  legalBack: string;
};

const ui: Record<Locale, Ui> = {
  de: {
    language: 'Sprache',
    languageDe: 'Deutsch',
    languageEn: 'English',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    cookies: 'Cookie-Richtlinien',
    legalNav: 'Rechtliches',
    legalBack: '← Zurück zur Startseite',
  },
  en: {
    language: 'Language',
    languageDe: 'Deutsch',
    languageEn: 'English',
    imprint: 'Imprint',
    privacy: 'Privacy',
    cookies: 'Cookie Policy',
    legalNav: 'Legal',
    legalBack: '← Back to home',
  },
};

export type UiKey = keyof Ui;

export function t(locale: Locale, key: UiKey): string {
  return ui[locale][key];
}

export function getUi(locale: Locale): Ui {
  return ui[locale];
}
