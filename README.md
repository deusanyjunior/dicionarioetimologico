# Dicionário etimológico

Aplicação web do **Dicionário de etimologia de termos morfológicos**, produzido por Ricardo Santos Simões, João Henrique Rodrigues Castello Girão, Gisela Rodrigues da Silva Sasso, Rinaldo Florencio da Silva, Luís Garcia Alonso e Sérgio Ricardo Marques.

O projeto organiza o material de referência da Escola Paulista de Medicina da UNIFESP em uma interface de consulta com busca, autocomplete e navegação por letras.

## Stack

- Next.js 14, React 18 e TypeScript
- Dados estáticos em JSON
- `react-markdown` com suporte a GitHub Flavored Markdown
- Compatível com deploy na Vercel

## Executar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000` no navegador.

## Dados

Os verbetes da aplicação estão disponíveis nos arquivos JSON por letra em `assets/dictionary/`. Esses arquivos já foram gerados a partir do material original e são a fonte utilizada em tempo de execução. O arquivo-fonte Markdown e as ferramentas locais de geração não fazem parte do deploy.

Para executar a aplicação localmente ou publicar na Vercel:

```bash
npm install
npm run build
npm start
```

Na Vercel, mantenha o comando de build como `npm run build`. O deploy precisa conter `assets/`, `package.json`, `package-lock.json`, `app/`, `components/` e `lib/`.

## GitHub Pages

Também é possível publicar uma versão estática no GitHub Pages. O workflow em `.github/workflows/deploy-pages.yml` executa automaticamente quando há push na branch `main`:

```bash
npm ci
npm run build:github
```

A exportação é criada em `out/`. O workflow configura automaticamente o `basePath` com o nome do repositório, necessário para URLs no formato `https://usuario.github.io/nome-do-repositorio/`. No GitHub, ative **Settings → Pages → Source: GitHub Actions**. Se o repositório usar outra branch principal, ajuste o gatilho do workflow.

O build normal (`npm run build`) continua adequado para a Vercel. O build do GitHub Pages usa `GITHUB_PAGES=true` e `NEXT_PUBLIC_BASE_PATH` apenas dentro do workflow, sem alterar o comportamento local ou da Vercel.

## Versão PWA e funcionamento offline

Esta aplicação também está disponível como **Progressive Web App (PWA)**. Em navegadores compatíveis, é possível instalar o dicionário no celular, tablet ou computador e utilizá-lo como uma aplicação independente.

Após o primeiro acesso com conexão, o service worker mantém as páginas e recursos principais em cache, permitindo consultar o dicionário offline. O conteúdo novo só será carregado quando houver conexão novamente.

### Instalação

- **Android/Chrome:** quando o navegador disponibilizar a instalação, o site exibirá um popup com o botão **Instalar aplicação**. Também é possível usar a opção de instalação no menu do navegador.
- **iPhone/iPad:** toque em **Compartilhar** no Safari e selecione **Adicionar à Tela de Início**. O popup da aplicação apresenta essas instruções automaticamente.
- **Computador:** navegadores compatíveis, como Chrome e Edge, podem exibir o ícone ou a opção de instalação na barra de endereços ou no menu do navegador.

A instalação exige que a aplicação seja acessada por HTTPS em produção. Tanto a Vercel quanto o GitHub Pages fornecem HTTPS por padrão. Em desenvolvimento local, o PWA pode não apresentar a opção de instalação porque `localhost` possui limitações específicas do navegador.


A bibliografia e os sites de consulta do material original estão disponíveis na página **Sobre**.
