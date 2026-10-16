import type { APIRoute } from 'astro';
import { content } from '../domains/localization/data/content';
import { siteConfig } from '../domains/site/config/site.config';
import {
    getServicePath,
    serviceIds,
} from '../features/service-offerings/config/service-route.config';

export const GET: APIRoute = ({ site }) => {
    const base = site ?? new URL(siteConfig.fallbackUrl);
    const sections = Object.values(content).map((localeContent) => {
        const services = serviceIds
            .map((serviceId) => {
                const service = localeContent.services.items.find(
                    ({ id }) => id === serviceId,
                );

                if (!service) return '';

                return `- [${service.title}](${new URL(getServicePath(localeContent.locale, serviceId), base).href}): ${service.text}`;
            })
            .filter(Boolean)
            .join('\n');

        return `## ${localeContent.locale.toUpperCase()}\n\n- [${localeContent.siteName}](${new URL(localeContent.locale === 'en' ? '/' : '/ru/', base).href}): ${localeContent.seo.description}\n${services}`;
    });

    const body = `# Impulse Expert\n\n> Cloud, Kubernetes, Web3, compliance-ready and AI infrastructure services.\n\n${sections.join('\n\n')}\n`;

    return new Response(body, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
};
