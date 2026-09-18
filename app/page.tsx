import { DictionaryClient } from '@/components/DictionaryClient';
import { getAllEntries } from '@/lib/dictionary';

export default function HomePage() {
  return <DictionaryClient entries={getAllEntries()} />;
}
