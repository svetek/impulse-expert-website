import type { APIRoute } from 'astro';
import {
    defaultLocale,
    localeConfig,
} from '../domains/localization/config/locale.config';
import { siteConfig } from '../domains/site/config/site.config';
import {
    getServicePath,
    serviceIds,
} from '../features/service-offerings/config/service-route.config';

export const GET: APIRoute = ({ site }) => {
    const base = site ?? new URL(siteConfig.fallbackUrl);
    const pageGroups = [
        Object.fromEntries(
            Object.entries(localeConfig).map(([locale, config]) => [
                locale,
                config.path,
            ]),
        ),
        ...serviceIds.map((serviceId) =>
            Object.fromEntries(
                Object.keys(localeConfig).map((locale) => [
                    locale,
                    getServicePath(
                        locale as keyof typeof localeConfig,
                        serviceId,
                    ),
                ]),
            ),
        ),
    ];
    const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pageGroups
    .flatMap((paths) =>
        Object.entries(paths).map(
            ([, path]) => `  <url>
    <loc>${new URL(path, base).href}</loc>
${Object.entries(paths)
    .map(
        ([locale, alternatePath]) =>
            `    <xhtml:link rel="alternate" hreflang="${locale}" href="${new URL(alternatePath, base).href}" />`,
    )
    .join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${new URL(paths[defaultLocale], base).href}" />
  </url>`,
        ),
    )
    .join('\n')}
</urlset>`;
    return new Response(body, {
        headers: { 'Content-Type': 'application/xml; charset=utf-8' },
    });
};
