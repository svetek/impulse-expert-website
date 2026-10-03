import type { ThemeDefinition } from '../interfaces/theme-definition.interface';

export const themeConfig = {
    dark: {
        colorScheme: 'dark',
        appearance: 'dark',
        browserColor: '#020812',
        systemPreference: undefined,
        tokens: {
            '--color-bg': '#020812',
            '--color-bg-soft': '#06101e',
            '--color-panel': '#081729',
            '--color-line': 'rgba(90, 156, 218, 0.15)',
            '--color-text': '#f5f9ff',
            '--color-muted': '#9cb0c7',
            '--color-text-soft': '#c8d5e3',
            '--color-text-faint': '#7891aa',
            '--color-cyan': '#21c8ff',
            '--color-blue': '#087dff',
            '--color-on-accent': '#00101c',
            '--color-action-text': '#ffffff',
            '--color-control-bg': 'rgba(2, 8, 18, 0.62)',
            '--color-control-border': 'rgba(144, 181, 218, 0.32)',
            '--color-header-start': 'rgba(1, 7, 15, 0.92)',
            '--color-header-middle': 'rgba(1, 7, 15, 0.62)',
            '--color-header-scrolled': 'rgba(1, 7, 15, 0.94)',
            '--color-mobile-nav': '#030b17',
            '--color-footer': '#01060d',
            '--color-section-start': '#030914',
            '--color-section-end': '#06101e',
            '--color-card-start': 'rgba(10, 28, 50, 0.8)',
            '--color-card-end': 'rgba(5, 16, 31, 0.9)',
            '--color-panel-start': '#08182b',
            '--color-panel-end': '#040d19',
            '--color-hero-solid': '#010710',
            '--color-hero-strong': 'rgba(1, 7, 16, 0.95)',
            '--color-hero-soft': 'rgba(1, 7, 16, 0.25)',
            '--color-hero-faint': 'rgba(1, 7, 16, 0.12)',
            '--color-grid-line': 'rgba(38, 161, 255, 0.05)',
            '--shadow-header': 'rgba(0, 0, 0, 0.24)',
            '--shadow-elevated': 'rgba(0, 0, 0, 0.52)',
        },
    },
    light: {
        colorScheme: 'light',
        appearance: 'light',
        browserColor: '#f4f8fc',
        systemPreference: '(prefers-color-scheme: light)',
        tokens: {
            '--color-bg': '#f4f8fc',
            '--color-bg-soft': '#eaf2f9',
            '--color-panel': '#ffffff',
            '--color-line': 'rgba(24, 72, 112, 0.18)',
            '--color-text': '#0b1d30',
            '--color-muted': '#50677e',
            '--color-text-soft': '#314b64',
            '--color-text-faint': '#647b91',
            '--color-cyan': '#007fa8',
            '--color-blue': '#066bd8',
            '--color-on-accent': '#ffffff',
            '--color-action-text': '#ffffff',
            '--color-control-bg': 'rgba(255, 255, 255, 0.78)',
            '--color-control-border': 'rgba(31, 91, 137, 0.28)',
            '--color-header-start': 'rgba(244, 248, 252, 0.96)',
            '--color-header-middle': 'rgba(244, 248, 252, 0.78)',
            '--color-header-scrolled': 'rgba(244, 248, 252, 0.96)',
            '--color-mobile-nav': '#f4f8fc',
            '--color-footer': '#dfeaf4',
            '--color-section-start': '#eef5fb',
            '--color-section-end': '#e5eff7',
            '--color-card-start': 'rgba(255, 255, 255, 0.96)',
            '--color-card-end': 'rgba(235, 243, 250, 0.98)',
            '--color-panel-start': '#ffffff',
            '--color-panel-end': '#edf4fa',
            '--color-hero-solid': '#f4f8fc',
            '--color-hero-strong': 'rgba(244, 248, 252, 0.96)',
            '--color-hero-soft': 'rgba(244, 248, 252, 0.34)',
            '--color-hero-faint': 'rgba(244, 248, 252, 0.14)',
            '--color-grid-line': 'rgba(6, 107, 216, 0.08)',
            '--shadow-header': 'rgba(31, 72, 107, 0.12)',
            '--shadow-elevated': 'rgba(31, 72, 107, 0.2)',
        },
    },
} as const satisfies Record<string, ThemeDefinition>;

export const themeIds = Object.keys(themeConfig) as Array<
    keyof typeof themeConfig
>;

export const themeSettings = {
    storageKey: 'impulse-theme',
    attribute: 'data-theme',
    appearanceAttribute: 'data-theme-appearance',
    defaultTheme: 'dark',
} as const satisfies {
    storageKey: string;
    attribute: string;
    appearanceAttribute: string;
    defaultTheme: keyof typeof themeConfig;
};
