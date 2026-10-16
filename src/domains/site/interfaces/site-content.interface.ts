import type { Locale } from '../../localization/types/locale.type';
import type { ServiceOfferingsContent } from '../../../features/service-offerings/interfaces/service-content.interface';
import type { ThemeId } from '../../theme/types/theme-id.type';

export interface SiteContent {
    locale: Locale;
    siteName: string;
    seo: {
        title: string;
        description: string;
        socialImageAlt: string;
    };
    header: {
        switchLocale: string;
        alternateLanguageName: string;
        navLabel: string;
        openMenu: string;
        closeMenu: string;
        homeLabel: string;
        contactPrompt: string;
        nav: Array<[label: string, href: string]>;
        talk: string;
        switchLanguageLabel: string;
        themeSwitcherLabel: string;
        themeNames: Record<ThemeId, string>;
    };
    hero: {
        eyebrow: string;
        title: string;
        accent: string;
        text: string;
        talk: string;
        explore: string;
    };
    services: ServiceOfferingsContent;
    proof: {
        title: string;
        metricsLabel: string;
        metricsNote: string;
        metrics: Array<[value: string, label: string]>;
        quotes: Array<
            [quote: string, name: string, role: string, initials: string]
        >;
    };
    contact: {
        eyebrow: string;
        title: string;
        text: string;
        talk: string;
        details: {
            title: string;
            text: string;
            phoneLabel: string;
            emailLabel: string;
            addressLabel: string;
            mapLabel: string;
        };
    };
    footer: {
        text: string;
        homeLabel: string;
    };
    analytics: {
        notice: string;
        accept: string;
        decline: string;
        preferencesLabel: string;
    };
    accessibility: {
        skipToContent: string;
    };
    notFound: {
        title: string;
        heading: string;
        description: string;
        action: string;
    };
}
