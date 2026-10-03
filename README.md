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
│   ├── atoms/      # Basic actions, labels and icons
│   ├── molecules/  # Shared composed interface elements
│   ├── organisms/  # Shared header, footer and page sections
│   ├── templates/  # Content-independent page structure
│   ├── pages/      # Templates filled with localized content
│   └── seo/        # Non-visual metadata and structured data
├── domains/
│   ├── localization/ # Locale configuration and independent EN/RU content
│   ├── site/         # Site-wide content contracts and technical config
│   └── theme/        # Theme definitions, runtime service and head bootstrap
├── features/
│   └── service-offerings/
│       ├── config/     # Stable service slugs and localized route helpers
│       ├── enums/      # Service identifiers
│       ├── interfaces/ # Feature content contracts
│       └── ui/         # Feature-local Atomic Design hierarchy
├── layouts/        # HTML document layouts
├── pages/          # Astro file-based routes
└── styles/         # Global tokens, reset and shared primitives
```

The UI follows Atomic Design at two scopes: reusable UI lives in `components/`, while service-specific atoms, molecules, and organisms stay in `features/service-offerings/ui/`. Pages compose templates and organisms, and lower levels do not import page-level components. SEO and route files stay outside the visual hierarchy. Components keep isolated styles in adjacent `*.module.css` files; small components may use Astro's scoped `<style>`. `styles/global.css` contains only design tokens, reset rules, base typography, and layout primitives.

Component classification and dependency rules are documented in [`docs/atomic-design.md`](docs/atomic-design.md).

Each locale is defined independently in `src/domains/localization/data/en.ts` and `ru.ts`. Both objects must satisfy the same TypeScript content contract, so missing translations fail during type checking.

## Themes

`src/domains/theme/config/theme.config.ts` is the single source of truth for theme identifiers, order, browser colors, system preferences, semantic appearance and CSS color tokens. The head bootstrap, theme switcher and runtime service are generated from this config.

To add another theme:

1. Add its definition to `themeConfig`. TypeScript requires the complete token contract.
2. Add its localized name to `header.themeNames` in `en.ts` and `ru.ts`.
3. Choose `appearance: 'light'` or `appearance: 'dark'` so images and technical illustrations use the appropriate visual variant.

The switcher order and `ThemeId` union update automatically. Components must use semantic tokens or `data-theme-appearance`; they must not check a concrete theme identifier.

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
- `/llms.txt` (experimental machine-readable service index)
- `/` with `hreflang="en"`
- `/ru/` with `hreflang="ru"`
- `/services/:service/` and `/ru/services/:service/`

Service pages emit canonical and reciprocal language links plus `WebPage`, `Service`, and `BreadcrumbList` JSON-LD. Global metadata includes `Organization` and `WebSite` entities. Register the production sitemap in Google Search Console, Bing Webmaster Tools, and Yandex Webmaster after deployment. Also verify that Cloudflare bot protection returns HTTP `200` to `OAI-SearchBot`; `robots.txt` explicitly permits it.
