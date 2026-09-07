# Artem Kovalev — CV Website

Personal resume website built with Vite + plain HTML/CSS/JS. Hosted on GitHub Pages.

## Local Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to GitHub Pages

### One-time setup

1. Push this repo to GitHub (e.g. `github.com/artem-kovalev/cv`)
2. Go to **Settings → Pages**
3. Set **Source** to **GitHub Actions**
4. The workflow in `.github/workflows/deploy.yml` runs automatically on every push to `main`

Your site will be live at `https://artem-kovalev.github.io/cv/` (or your custom domain).

### Custom domain (optional)

Add a `CNAME` file to `src/public/` with your domain, e.g.:

```
akovalev.me
```

Vite copies everything in `src/public/` verbatim into `dist/`, so the file ships with the
Pages artifact. A `CNAME` at the repo root would **not** be picked up — the deploy workflow
uploads `dist/` only.

Then configure the DNS record with your provider.

## Project Structure

```
cv/
├── src/
│   ├── index.html       ← main page (all content here)
│   ├── main.css         ← all styles
│   ├── main.js          ← nav, scroll animations
│   ├── assets/
│   │   ├── photo.jpg    ← profile photo (600×900, JPEG fallback)
│   │   ├── photo.webp   ← same photo, served first via <picture>
│   │   └── favicon.svg  ← favicon
│   └── public/          ← copied verbatim into dist/
│       ├── CNAME        ← custom domain
│       ├── og.jpg       ← 1200×630 social preview card
│       └── fonts/       ← self-hosted Inter (see the FONT note in main.css)
├── .github/workflows/
│   └── deploy.yml       ← GitHub Actions CI/CD
├── vite.config.js
├── package.json
└── README.md
```

## Theming & Print

`main.css` drives everything from CSS custom properties on `:root`. A
`@media (prefers-color-scheme: dark)` block re-declares the same tokens, so dark mode
needs no extra markup — if you add a colour, add it as a token rather than a literal or
it will not adapt. There is also a `@media print` block (the CV is meant to be saved as
PDF) and a `@media (prefers-reduced-motion: reduce)` block that lands the scroll reveal
visible instead of animating it.

Note that the print viewport is roughly 816px, so the `max-width: 900px` rules apply on
paper too; the print block is placed last and overrides them where needed.

## Updating Content

All content is in `src/index.html`. Each section is clearly marked with comments:
- `<!-- HERO -->` — name, title, summary, links
- `<!-- ABOUT -->` — background text and strengths
- `<!-- SKILLS -->` — tech stack tags
- `<!-- EXPERIENCE -->` — work timeline
- `<!-- PROJECTS -->` — project cards
- `<!-- EDUCATION -->` — education card
- `<!-- CONTACT -->` — contact links
