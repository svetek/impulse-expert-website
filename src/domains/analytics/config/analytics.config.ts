const rawGoogleAnalyticsId = import.meta.env.PUBLIC_GOOGLE_ANALYTICS_ID?.trim();
const rawYandexMetrikaId = import.meta.env.PUBLIC_YANDEX_METRIKA_ID?.trim();

const googleAnalyticsId = /^G-[A-Z0-9]+$/.test(rawGoogleAnalyticsId ?? '')
    ? rawGoogleAnalyticsId
    : undefined;
const yandexMetrikaId = /^[1-9]\d*$/.test(rawYandexMetrikaId ?? '')
    ? rawYandexMetrikaId
    : undefined;

export const analyticsConfig = {
    googleAnalyticsId,
    yandexMetrikaId,
    enabled: Boolean(googleAnalyticsId || yandexMetrikaId),
} as const;
