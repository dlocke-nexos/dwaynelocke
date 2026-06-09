import siteData from './data/site.json';

export type Language = {
  code: string;
  label: string;
  name: string;
  href: string;
  available: boolean;
};

export const site = {
  linkedin: siteData.linkedin,
};

export const languages: Language[] = siteData.languages;
