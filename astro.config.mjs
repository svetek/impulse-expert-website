import { defineConfig } from 'astro/config';
import { siteConfig } from './src/domains/site/config/site.config';

export default defineConfig({
    site: process.env.SITE_URL ?? siteConfig.fallbackUrl,
    output: 'static',
    build: {
        format: 'directory',
    },
});
