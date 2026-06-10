import type { CollectionEntry } from 'astro:content';
import type { Locale } from './index';

type EssayData = CollectionEntry<'essays'>['data'];

export function essayTitle(data: EssayData, locale: Locale): string {
  if (locale === 'es' && data.titleEs) return data.titleEs;
  return data.title;
}

export function essayDescription(data: EssayData, locale: Locale): string {
  if (locale === 'es' && data.descriptionEs) return data.descriptionEs;
  return data.description;
}

// The phrase within the title to render in rust italic (homepage-hero style). '' if none set.
export function essayEmphasis(data: EssayData, locale: Locale): string {
  if (locale === 'es') return data.titleEmphasisEs ?? data.titleEmphasis ?? '';
  return data.titleEmphasis ?? '';
}
