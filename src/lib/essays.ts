import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n';
import type { MarkdownInstance } from 'astro';

type EssayEntry = CollectionEntry<'essays'>;

export async function getSortedEssays(): Promise<EssayEntry[]> {
  return (await getCollection('essays')).sort(
    (a, b) => (a.data.order ?? 999) - (b.data.order ?? 999)
  );
}

export async function getAnchorEssay(): Promise<EssayEntry> {
  const anchor = (await getSortedEssays()).find((e) => !e.data.draft);
  if (!anchor) throw new Error('No published anchor essay found in src/content/essays/.');
  return anchor;
}

export async function getEssayBody(
  slug: string,
  locale: Locale
): Promise<{ Content: MarkdownInstance['Content']; bodyLocale: Locale }> {
  if (locale === 'es') {
    const esEntries = await getCollection('essaysEs');
    const esEntry = esEntries.find((e) => e.slug === slug);
    if (esEntry) {
      const { Content } = await esEntry.render();
      return { Content, bodyLocale: 'es' };
    }
  }

  const enEntries = await getCollection('essays');
  const enEntry = enEntries.find((e) => e.slug === slug);
  if (!enEntry) throw new Error(`Essay not found: ${slug}`);
  const { Content } = await enEntry.render();
  return { Content, bodyLocale: 'en' };
}
