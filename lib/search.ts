import type { DictionaryEntry } from './types';

export function normalizeTerm(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\p{L}\p{N}]+/gu, '').toLowerCase();
}

export function searchEntries(query: string, entries: DictionaryEntry[]) {
  const term = normalizeTerm(query);
  if (!term) return [];
  const exactMatches = entries.filter((entry) => entry.keyNormalized === term);
  if (exactMatches.length > 0) {
    return exactMatches.sort((a, b) => a.keyNormalized.localeCompare(b.keyNormalized, 'pt-BR'));
  }
  const variants = [term];
  for (let end = term.length - 1; end >= 2; end -= 1) variants.push(term.slice(0, end));
  for (let start = 1; start <= term.length - 2; start += 1) variants.push(term.slice(start));
  const found = new Map<string, { entry: DictionaryEntry; priority: number; startsWithTerm: boolean }>();
  variants.forEach((variant, priority) => {
    entries.forEach((entry) => {
      if (!entry.keyNormalized.includes(variant) || found.has(entry.id)) return;
      found.set(entry.id, { entry, priority, startsWithTerm: entry.keyNormalized.startsWith(term) });
    });
  });
  return [...found.values()].sort((a, b) => a.priority - b.priority || Number(!a.startsWithTerm) - Number(!b.startsWithTerm) || a.entry.keyNormalized.localeCompare(b.entry.keyNormalized, 'pt-BR')).map(({ entry }) => entry);
}
