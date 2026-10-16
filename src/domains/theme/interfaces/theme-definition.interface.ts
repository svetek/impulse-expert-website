import type { ThemeTokens } from './theme-tokens.interface';

export type ThemeColorScheme = 'dark' | 'light';

export interface ThemeDefinition {
    colorScheme: ThemeColorScheme;
    appearance: ThemeColorScheme;
    browserColor: string;
    systemPreference: string | undefined;
    tokens: ThemeTokens;
}
