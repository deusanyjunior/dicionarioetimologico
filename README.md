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

## PWA e funcionamento offline

A aplicação é um Progressive Web App. Em navegadores compatíveis, após o primeiro acesso via HTTPS, o menu do navegador poderá oferecer a opção de instalar o dicionário no aparelho. O service worker mantém as páginas, imagens e recursos acessados em cache para permitir a abertura offline depois que o site tiver sido visitado uma primeira vez.

Para a instalação funcionar em produção, publique pela Vercel ou outro servidor HTTPS. O modo offline depende de o usuário ter aberto as páginas e recursos enquanto estava conectado; a aplicação não consegue baixar conteúdo novo sem conexão.


A bibliografia e os sites de consulta do material original estão disponíveis na página **Sobre**.
