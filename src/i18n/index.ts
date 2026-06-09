import { en, type Dictionary } from './en';
import { es } from './es';

export type Locale = 'en' | 'es';

const dictionaries: Record<Locale, Dictionary> = { en, es };

export function t(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function getLocale(pathname: string): Locale {
  return pathname === '/es' || pathname.startsWith('/es/') ? 'es' : 'en';
}

/** Switch the current path to the equivalent page in another locale. */
export function switchLocalePath(pathname: string, target: Locale): string {
  const normalized = pathname.endsWith('/') && pathname.length > 1
    ? pathname.slice(0, -1)
    : pathname;

  let base = normalized;
  if (getLocale(normalized) === 'es') {
    base = normalized.replace(/^\/es/, '') || '/';
  }

  if (target === 'es') {
    if (base === '/') return '/es/';
    return `/es${base}`;
  }

  return base || '/';
}

export function homePath(locale: Locale): string {
  return locale === 'es' ? '/es/home' : '/home';
}

export function frameworksPath(locale: Locale): string {
  return locale === 'es' ? '/es/frameworks' : '/frameworks';
}

export function anchorPath(locale: Locale): string {
  return locale === 'es' ? '/es/' : '/';
}

export function essayPath(slug: string, locale: Locale, isAnchor: boolean): string {
  if (isAnchor) return anchorPath(locale);
  const prefix = locale === 'es' ? '/es' : '';
  return `${prefix}/essays/${slug}/`;
}
