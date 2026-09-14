# Manos security engineering portfolio

Personal site for Emmanouil “Manos” Gkikontis. Static React + TypeScript + Vite, published to GitHub Pages.

Live: https://androidkrayze.github.io/manos-security-portfolio/

## Local development

```bash
npm install
npm run dev
```

The Vite `base` is `/manos-security-portfolio/` so production asset paths match the project Pages URL. `npm run dev` still serves the app locally.

```bash
npm run test
npm run lint
npm run build
npm run preview
```

`preview` serves the production `dist` folder. Open it with the project base in mind.

## Editing content

All public copy, dates, links, workflow modes and sample product data live in [`src/content/site.ts`](src/content/site.ts). Edit that file. Do not put private attachments, credentials, internal diagrams or employment-dispute material in the repo.

There is no CV download control. Add one only if a deliberately selected public-safe CV is placed in `public/` and linked from `site.ts`.

## Deployment

GitHub Actions builds with `npm ci` and deploys `dist` through the `github-pages` environment. The workflow is [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

After the first push, confirm **Settings → Pages → Source** is **GitHub Actions**. Manual runs are available via **workflow_dispatch**.
