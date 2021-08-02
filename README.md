# Reactesse SSR

> React + Vite + SSR template based on [@antfu](https://github.com/antfu)'s [Vitesse](https://github.com/antfu/vitesse) with [`vite-ssr`](https://github.com/frandiox/vite-ssr).

<p align='center'>
<a href="https://reactesse-ssr.vercel.app/">Live Demo</a>
</p>

## Features

- ⚡️ [React](https://github.com/facebook/react), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [ESBuild](https://github.com/evanw/esbuild)

- 🗂 [File based routing](./src/pages)

- 🎨 [Windi CSS](https://github.com/windicss/windicss) - on-demand Tailwind CSS with speed

- 😃 [SVG icons](https://react-icons.github.io/react-icons/)

- 🌍 [I18n ready](./src/i18n/translations)

- 🗒 [Markdown Support](https://github.com/brillout/vite-plugin-mdx)

- 🖨 Server-side rendering (SSR) in Node.js via [vite-ssr](https://github.com/frandiox/vite-ssr)

- 🦾 TypeScript, of course

- ☁️ Deploy on Vercel, minimal [config](./serverless/vercel.json)

<br>

## Pre-packed

### UI Frameworks

- [Windi CSS](https://github.com/windicss/windicss) (On-demand [TailwindCSS](https://tailwindcss.com/)) - lighter and faster, with a bundle additional features!
  - [Windi CSS Typography](https://windicss.netlify.app/guide/plugins.html#typography) - similar to [Tailwind CSS Typography](https://github.com/tailwindlabs/tailwindcss-typograph) but for Windi CSS

### Plugins

- [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
- [`vite-plugin-windicss`](https://github.com/antfu/vite-plugin-windicss) - WindiCSS support
- [`vite-plugin-mdx`](https://github.com/brillout/vite-plugin-mdx) - Markdown as components / components in Markdown
- [`remark-prism`](https://github.com/sergioramos/remark-prism) - [Prism](https://prismjs.com/) for syntax highlighting
- [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) - customizable Prism.js theme using CSS variables
- [react-i18next](https://react.i18next.com/) - Internationalization
- [`react-helmet-async`](https://github.com/staylor/react-helmet-async) - manipulate document head reactively

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.js.org/) - fast, disk space efficient package manager
- [`vite-ssr`](https://github.com/frandiox/vite-ssr) - Server-side rendering
- [Vercel](https://vercel.com/) - deploy
- [VS Code Extensions](./.vscode/extensions.json)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/frandiox/reactesse-ssr-template/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit frandiox/reactesse-ssr-template my-reactesse-app
cd my-reactesse-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Add a `name` field in `package.json`
- [ ] Change the author name in `LICENSE`
- [ ] Change the favicon in `public`
- [ ] Remove the `.github` folder which contains the funding info
- [ ] Clean up the READMEs and remove routes

And, enjoy :)

## Usage

### Development

Just run and visit http://localhost:3333

```bash
pnpm dev # SSR development
pnpm dev:spa # SPA without SSR
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated files in `dist`, and some of these files will be moved to `serverless` for deployment.

### Deploy on Vercel

Go to [Vercel](https://vercel.com) and install its CLI. Then:

```bash
pnpm preview # Simulate Vercel environment locally
pnpm deploy
pnpm deploy:prod
```
