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

A etapa `npm run generate:data` lê o arquivo local `dicionario.md` usando o parser local em `scripts/`, cria um arquivo JSON por letra em `assets/dictionary/` e atualiza o índice em `assets/search-index.json`. O Markdown e o parser são apenas ferramentas de geração e devem permanecer fora do Git e da nuvem; somente os JSONs gerados são necessários para executar e publicar a aplicação.

A geração dos dados é feita localmente com `npm run generate:data`. Depois de atualizar os dados, versione a pasta `assets/`. O build de produção usa os JSONs já gerados e não depende do parser nem do `dicionario.md`:

```bash
npm run generate:data
npm run build
npm start
```

Na Vercel, mantenha o comando de build como `npm run build`. O deploy precisa conter `assets/`, `package.json`, `package-lock.json`, `app/`, `components/` e `lib/`; não é necessário enviar `dicionario.md` nem `scripts/`.

## Referências

A referência visual é o [Atlas de Anatomia Virtual da UNIFESP](https://sites.google.com/unifesp.br/atlasdeanatomiavirtual/). A bibliografia e os sites de consulta do material original estão disponíveis na página **Sobre** e no arquivo `dicionario.md`.
