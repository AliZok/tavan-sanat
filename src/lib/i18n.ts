import en from '../locales/en.json';
import fa from '../locales/fa.json';

export type Locale = 'en' | 'fa';

const translations = {
  en,
  fa,
};

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.en;
}

export function getDirection(locale: Locale): 'ltr' | 'rtl' {
  return locale === 'fa' ? 'rtl' : 'ltr';
}

export function formatNumber(num: number, locale: Locale): string {
  return new Intl.NumberFormat(locale === 'fa' ? 'fa-IR' : 'en-US').format(num);
}

export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === 'fa' ? 'fa-IR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
