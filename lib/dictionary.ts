import fs from 'node:fs';
import path from 'node:path';
import type { DictionaryEntry, LetterData } from './types';

export const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const directory = path.join(process.cwd(), 'assets', 'dictionary');

export function getLetterData(letter: string): LetterData {
  const normalized = letter.toUpperCase();
  try {
    return JSON.parse(fs.readFileSync(path.join(directory, `${normalized}.json`), 'utf8')) as LetterData;
  } catch {
    return { letter: normalized, entries: [] };
  }
}

export function getAllEntries(): DictionaryEntry[] {
  return letters.flatMap((letter) => getLetterData(letter).entries);
}
