export type DictionaryEntry = {
  id: string;
  key: string;
  keyNormalized: string;
  markdown: string;
};

export type LetterData = {
  letter: string;
  entries: DictionaryEntry[];
};
