# Dicionário etimológico

Aplicação web do **Dicionário de etimologia de termos morfológicos**, produzido por Ricardo Santos Simões, João Henrique Rodrigues Castello Girão, Gisela Rodrigues da Silva Sasso, Rinaldo Florencio da Silva, Luís Garcia Alonso e Sérgio Ricardo Marques.

O projeto organiza o material de referência da Escola Paulista de Medicina da UNIFESP em uma interface de consulta com busca, autocomplete e navegação por letras. O conteúdo dos verbetes é preservado como Markdown, sem correções ortográficas ou alterações editoriais.

## Stack

- Next.js 14, React 18 e TypeScript
- Dados estáticos em JSON, gerados a partir de `dicionario.md`
- `react-markdown` com suporte a GitHub Flavored Markdown
- Compatível com deploy na Vercel

## Executar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000` no navegador.

## Dados

A etapa `npm run generate:data` cria um arquivo JSON por letra em `assets/dictionary/` e um índice em `assets/search-index.json`. A origem é sempre o arquivo `dicionario.md`; a normalização é usada apenas para busca e não substitui as chaves ou os textos exibidos.

O build executa a geração dos dados automaticamente:

```bash
npm run build
npm start
```

## Referências

A referência visual é o [Atlas de Anatomia Virtual da UNIFESP](https://sites.google.com/unifesp.br/atlasdeanatomiavirtual/). A bibliografia e os sites de consulta do material original estão disponíveis na página **Sobre** e no arquivo `dicionario.md`.
