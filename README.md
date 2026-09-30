# Impulse Expert website

Static one-page website for Impulse Expert — Web3, cloud, Kubernetes, AI, and compliance-ready infrastructure services.

## Local preview

```powershell
npx wrangler pages dev
```

The site is also compatible with any static file server pointed at `dist/`.

## Cloudflare Workers

The project is configured as a static-assets Worker through `wrangler.toml`.

For Cloudflare Builds, use:

- Build command: leave empty
- Deploy command: `npx wrangler deploy`

```powershell
npx wrangler deploy
```

