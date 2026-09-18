'use client';

import { useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { searchEntries } from '@/lib/search';
import type { DictionaryEntry } from '@/lib/types';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export function DictionaryClient({ entries }: { entries: DictionaryEntry[] }) {
  const [query, setQuery] = useState('');
  const [submitted, setSubmitted] = useState('');
  const [letter, setLetter] = useState('');
  const results = useMemo(() => submitted ? searchEntries(submitted, entries) : letter ? entries.filter((entry) => entry.keyNormalized.startsWith(letter.toLowerCase())) : [], [submitted, letter, entries]);
  const suggestions = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value || value === submitted.toLowerCase()) return [];
    return entries.filter((entry) => entry.key.toLowerCase().includes(value)).slice(0, 8);
  }, [entries, query, submitted]);

  function submit(event: React.FormEvent) { event.preventDefault(); setSubmitted(query); setLetter(''); }
  function chooseLetter(value: string) { setLetter(value); setSubmitted(''); setQuery(''); }

  return <section className="dictionary-shell" aria-labelledby="dictionary-title">
    <div className="intro-block"><p className="eyebrow">Anatomia · Histologia · Embriologia</p><h1 id="dictionary-title">Encontre a origem dos termos morfológicos</h1><p>Pesquise uma palavra ou navegue pelas letras para consultar o conteúdo preservado do dicionário.</p></div>
    <form className="search-form" onSubmit={submit} role="search"><label htmlFor="search">Buscar no dicionário</label><div className="search-row"><input id="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ex.: abdome, neurônio, útero..." autoComplete="off"/><button type="submit">Pesquisar</button></div>{suggestions.length > 0 && <ul className="suggestions" aria-label="Sugestões">{suggestions.map((entry) => <li key={entry.id}><button type="button" onClick={() => { setQuery(entry.key); setSubmitted(entry.key); }}>{entry.key}</button></li>)}</ul>}</form>
    <div className="letter-nav"><span>Explorar por letra</span><div className="letters" role="group" aria-label="Letras do dicionário">{alphabet.map((item) => <button key={item} type="button" className={letter === item ? 'active' : ''} onClick={() => chooseLetter(item)}>{item}</button>)}</div></div>
    <div className="results-heading">{submitted ? <><span>Resultados para</span><strong>“{submitted}”</strong></> : letter ? <><span>Termos iniciados por</span><strong>{letter}</strong></> : <span>Selecione uma letra ou faça uma busca para começar</span>}</div>
    {results.length > 0 ? <div className="entries">{results.map((entry) => <article className="entry-card" key={entry.id}><h2>{entry.key}</h2><div className="entry-markdown"><ReactMarkdown remarkPlugins={[remarkGfm]}>{entry.markdown}</ReactMarkdown></div></article>)}</div> : (submitted || letter) && <div className="empty-state"><strong>Nenhum termo encontrado.</strong><p>Tente outra palavra ou selecione uma letra diferente.</p></div>}
  </section>;
}
