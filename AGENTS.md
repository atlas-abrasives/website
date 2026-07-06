# Atlas Abrasives & Coatings Website

Marketing/local-SEO site for Atlas Abrasives & Coatings, a sandblasting and coatings business in Brigham City, Utah (owner: Kade Atkinson). Static site built with **Hugo** + **Tailwind CSS v3**, deployed to **GitHub Pages** at https://www.atlasabrasives.com/.

## Commands

- `npm install` — install dev deps (Tailwind only; Hugo must be installed separately, CI uses Hugo extended 0.152.2)
- `npm run dev` — Hugo dev server with drafts (`hugo server -D`)
- `npm run build:css` — compile Tailwind (`assets/css/tail-in.css` → `assets/css/tail-out.css`, minified)
- `npm run watch:css` — Tailwind in watch mode (run alongside `npm run dev` when editing styles)
- `npm run build` — full production build (CSS + `hugo --minify`)

There are no tests or linters. Verify changes by building and eyeballing the dev server.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy-pages.yml`, which builds CSS + Hugo and deploys `public/` to GitHub Pages. There is no staging environment — anything merged to `main` goes live.

## Layout

- `content/` — Markdown pages with front matter. The home page (`_index.md`) is content-empty; its body lives in `layouts/index.html`. Other pages (services, about, contact, plus location-SEO pages like `brigham-city-sandblasting.md`) render through `layouts/_default/single.html`.
- `layouts/` — all templates live here (no theme; `themes/` is empty). `_default/baseof.html` is the shell; partials: `head.html` (meta/OG/canonical), `schema.html` (JSON-LD LocalBusiness/WebSite), `top_nav.html`, `footer.html`.
- `assets/css/tail-in.css` — Tailwind entry point with `@layer components` classes (`.panel`, `.btn-primary`, `.section-title`, `.eyebrow`, etc.). `tail-out.css` is generated but **committed** — rebuild and commit it when styles change.
- `static/` — favicons, `img/` (photos, logo, OG image), webmanifest.
- `hugo.toml` — site config; business facts (phone, email, address, coordinates, hours, service area) live under `[params.contact]` and are consumed by templates and JSON-LD. Update facts here, not in templates.
- `public/` and `node_modules/` are gitignored build output.

## Conventions

- **Front matter drives SEO**: pages set `title`, `seoTitle` (full `<title>` override), `description`, optional `serviceType` and a `faq` list (`q`/`a` pairs) that feeds FAQ rendering/schema. Follow the existing pattern when adding pages.
- **Local SEO is the point**: content targets keywords like "Brigham City sandblasting" and "Northern Utah sandblasting".
- **Styling**: dark industrial theme using custom Tailwind palettes `steel` (grays) and `rust` (orange accents) defined in `tailwind.config.js`. Prefer the existing component classes from `tail-in.css` over ad-hoc utility soup in templates. Tailwind only scans `layouts/**/*.{html,js}` — classes used elsewhere won't be generated.
- Taxonomies and terms are disabled in Hugo config; this is a small flat site, keep it that way.
