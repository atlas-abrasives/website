# Atlas Abrasives & Coatings Website

## Local development

- Install deps: `npm install`
- Build Tailwind CSS: `npm run build:css`
- Run Hugo dev server: `npm run dev`

## GitHub Pages deployment

This repo is configured to deploy with GitHub Actions via `.github/workflows/deploy-pages.yml`.

In GitHub repository settings:

1. Go to `Settings -> Pages`
2. Set **Source** to **GitHub Actions**
3. Push to `main` to trigger deployment
