# Impulse Expert website

Multilingual Astro website for Impulse Expert. Astro generates a static English site at `/` and a Russian version at `/ru/`; Cloudflare Workers serves the generated `dist/` directory.

## Local development

```bash
npm install
cp .env.example .env
npm run dev
```

The analytics variables are optional. If they are omitted, no consent banner is rendered and no analytics request is made.

## Project structure

```text
src/
├── components/
│   ├── analytics/  # Consent and analytics loaders
│   ├── layout/     # Site header and footer
│   ├── pages/      # Page-level composition
│   ├── sections/   # Landing sections and their private components
│   ├── seo/        # Metadata and structured data
│   └── ui/         # Small reusable UI elements
├── domains/
│   ├── localization/ # Locale configuration and independent EN/RU content
│   └── site/         # Site-wide content contracts and technical config
├── features/
│   └── service-offerings/ # Service section, models and visuals
├── layouts/        # HTML document layouts
├── pages/          # Astro file-based routes
└── styles/         # Global tokens, reset and shared primitives
```

Large components keep isolated styles in adjacent `*.module.css` files imported from their Astro frontmatter. Small components may use Astro's scoped `<style>`. `styles/global.css` contains only design tokens, reset rules, base typography, layout primitives, and shared button styles.

Each locale is defined independently in `src/domains/localization/data/en.ts` and `ru.ts`. Both objects must satisfy the same TypeScript content contract, so missing translations fail during type checking.

## Checks and production build

```bash
npm run check
npm run build
npm run preview
```

`SITE_URL` defaults to `https://impulse.expert` and is used for canonical links, alternate-language links, the sitemap, and social metadata.

## Cloudflare deployment

The existing `wrangler.toml` deploys `dist/` as Worker static assets:

```bash
npm run deploy
```

The GitHub Actions workflow builds pull requests and deploys pushes to `main`. Configure these repository settings:

- Actions secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`
- Actions variables: `SITE_URL`, `PUBLIC_GOOGLE_ANALYTICS_ID`, `PUBLIC_YANDEX_METRIKA_ID`

The Cloudflare token needs permission to edit Workers Scripts. Set the analytics variables to the GA4 measurement ID (for example `G-XXXXXXXXXX`) and the numeric Yandex Metrika counter ID.

Cloudflare reads `public/_headers` from the generated assets. Security headers apply to the whole site, while hashed Astro assets use a one-year immutable browser cache.

## SEO routes

- `/robots.txt`
- `/sitemap.xml`
- `/` with `hreflang="en"`
- `/ru/` with `hreflang="ru"`
