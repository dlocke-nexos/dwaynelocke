import type { Locale } from '../../i18n';
import type { FrameworkData } from './types';
import { frameworkDataEn } from './en';
import { frameworkDataEs } from './es';

export type { FrameworkData, FunctionProfile, Intersection, StageProfile, StructureLayer } from './types';

export function getFrameworkData(locale: Locale): FrameworkData {
  return locale === 'es' ? frameworkDataEs : frameworkDataEn;
}
