import type { ThemeId } from '../types/theme-id.type';

export interface RuntimeThemeDefinition {
    id: ThemeId;
    appearance: 'dark' | 'light';
    browserColor: string;
    colorScheme: 'dark' | 'light';
    systemPreference?: string;
}

export interface RuntimeThemeSettings {
    storageKey: string;
    attribute: string;
    appearanceAttribute: string;
    defaultTheme: ThemeId;
}

export interface ThemeController {
    readonly themeIds: ThemeId[];
    isThemeId: (value: unknown) => value is ThemeId;
    getStoredTheme: () => ThemeId | null;
    resolveTheme: () => ThemeId;
    getAppliedTheme: (targetDocument?: Document) => ThemeId | null;
    applyTheme: (themeId: ThemeId, targetDocument?: Document) => void;
    storeTheme: (themeId: ThemeId) => void;
    followSystemPreference: (signal: AbortSignal) => void;
}

declare global {
    interface Window {
        impulseTheme?: ThemeController;
    }
}

/**
 * Creates the browser theme controller. Keep this function self-contained:
 * ThemeHead serializes it into the document head to apply the theme pre-paint.
 */
export const initializeThemeController = (
    runtimeThemes: RuntimeThemeDefinition[],
    settings: RuntimeThemeSettings,
) => {
    const themeIds = runtimeThemes.map(({ id }) => id);
    const isThemeId = (value: unknown): value is ThemeId =>
        typeof value === 'string' && themeIds.includes(value as ThemeId);
    const getDefinition = (themeId: ThemeId) =>
        runtimeThemes.find(({ id }) => id === themeId);
    const getStoredTheme = (): ThemeId | null => {
        try {
            const value = localStorage.getItem(settings.storageKey);
            return isThemeId(value) ? value : null;
        } catch {
            return null;
        }
    };
    const resolveTheme = (): ThemeId => {
        const storedTheme = getStoredTheme();
        if (storedTheme) return storedTheme;

        return (
            runtimeThemes.find(
                ({ systemPreference }) =>
                    systemPreference && matchMedia(systemPreference).matches,
            )?.id ?? settings.defaultTheme
        );
    };
    const getAppliedTheme = (
        targetDocument: Document = document,
    ): ThemeId | null => {
        const value = targetDocument.documentElement.getAttribute(
            settings.attribute,
        );
        return isThemeId(value) ? value : null;
    };
    const applyTheme = (
        themeId: ThemeId,
        targetDocument: Document = document,
    ) => {
        const definition = getDefinition(themeId);
        if (!definition) return;

        const root = targetDocument.documentElement;
        root.setAttribute(settings.attribute, themeId);
        root.setAttribute(settings.appearanceAttribute, definition.appearance);
        root.style.colorScheme = definition.colorScheme;
        targetDocument
            .querySelector<HTMLMetaElement>('meta[name="theme-color"]')
            ?.setAttribute('content', definition.browserColor);

        if (targetDocument === document) {
            document.dispatchEvent(
                new CustomEvent('theme:change', { detail: { themeId } }),
            );
        }
    };
    const storeTheme = (themeId: ThemeId) => {
        try {
            localStorage.setItem(settings.storageKey, themeId);
        } catch {
            // The selected theme still applies for the current page.
        }
    };
    const followSystemPreference = (signal: AbortSignal) => {
        const syncTheme = () => {
            if (!getStoredTheme()) applyTheme(resolveTheme());
        };
        runtimeThemes.forEach(({ systemPreference }) => {
            if (!systemPreference) return;
            matchMedia(systemPreference).addEventListener('change', syncTheme, {
                signal,
            });
        });
    };

    const controller: ThemeController = {
        themeIds,
        isThemeId,
        getStoredTheme,
        resolveTheme,
        getAppliedTheme,
        applyTheme,
        storeTheme,
        followSystemPreference,
    };
    window.impulseTheme = controller;
    controller.applyTheme(controller.resolveTheme());
};

export const getThemeController = (): ThemeController | undefined =>
    window.impulseTheme;
