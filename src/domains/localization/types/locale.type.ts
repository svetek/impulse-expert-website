export const supportedLocales = ['en', 'ru'] as const;

export type Locale = (typeof supportedLocales)[number];
