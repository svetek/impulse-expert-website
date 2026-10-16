import type { LocaleConfig } from '../interfaces/locale-config.interface';
import { supportedLocales, type Locale } from '../types/locale.type';

export { supportedLocales };

export const defaultLocale: Locale = 'en';

export const localeConfig = {
    en: {
        path: '/',
        alternateLocale: 'ru',
        openGraphLocale: 'en_US',
    },
    ru: {
        path: '/ru/',
        alternateLocale: 'en',
        openGraphLocale: 'ru_RU',
    },
} satisfies Record<Locale, LocaleConfig>;
