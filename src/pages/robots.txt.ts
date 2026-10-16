import type { APIRoute } from 'astro';
import { siteConfig } from '../domains/site/config/site.config';

export const GET: APIRoute = ({ site }) => {
    const base = site ?? new URL(siteConfig.fallbackUrl);
    return new Response(
        `User-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', base).href}\n`,
        {
            headers: { 'Content-Type': 'text/plain; charset=utf-8' },
        },
    );
};
