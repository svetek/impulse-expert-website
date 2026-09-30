import type { APIRoute } from 'astro';
import {
    defaultLocale,
    localeConfig,
} from '../domains/localization/config/locale.config';
import { siteConfig } from '../domains/site/config/site.config';

export const GET: APIRoute = ({ site }) => {
    const base = site ?? new URL(siteConfig.fallbackUrl);
    const urls = Object.values(localeConfig).map(({ path }) => path);
    const alternates = Object.entries(localeConfig);
    const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
    .map(
        (path) => `  <url>
    <loc>${new URL(path, base).href}</loc>
${alternates
    .map(
        ([locale, config]) =>
            `    <xhtml:link rel="alternate" hreflang="${locale}" href="${new URL(config.path, base).href}" />`,
    )
    .join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${new URL(localeConfig[defaultLocale].path, base).href}" />
  </url>`,
    )
    .join('\n')}
</urlset>`;
    return new Response(body, {
        headers: { 'Content-Type': 'application/xml; charset=utf-8' },
    });
};
