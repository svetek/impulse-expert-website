# Impulse Expert website

Static one-page website for Impulse Expert — Web3, cloud, Kubernetes, AI, and compliance-ready infrastructure services.

## Local preview

```powershell
npx wrangler pages dev
```

The site is also compatible with any static file server pointed at `dist/`.

## Cloudflare Pages

The project is configured through `wrangler.toml`. For a Git-connected Pages project, use:

- Build command: leave empty
- Build output directory: `dist`

For a manual deployment:

```powershell
npx wrangler pages deploy
```
