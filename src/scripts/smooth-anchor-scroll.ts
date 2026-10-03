const isPrimaryClick = (event: MouseEvent) =>
    event.button === 0 &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey;

const getAnchorTarget = (hash: string) => {
    if (!hash || hash === '#') return document.documentElement;

    try {
        return document.getElementById(decodeURIComponent(hash.slice(1)));
    } catch {
        return null;
    }
};

document.addEventListener(
    'click',
    (event) => {
        if (event.defaultPrevented || !isPrimaryClick(event)) return;

        const eventTarget = event.composedPath()[0];
        const link =
            eventTarget instanceof Element
                ? eventTarget.closest<HTMLAnchorElement>('a[href]')
                : null;

        if (
            !link ||
            link.hasAttribute('download') ||
            (link.target && link.target !== '_self')
        ) {
            return;
        }

        const destination = new URL(link.href, window.location.href);
        const current = new URL(window.location.href);
        const isCurrentDocument =
            destination.origin === current.origin &&
            destination.pathname === current.pathname &&
            destination.search === current.search;

        if (!isCurrentDocument || !destination.hash) return;

        const anchorTarget = getAnchorTarget(destination.hash);
        if (!anchorTarget) return;

        event.preventDefault();
        if (destination.hash !== current.hash) {
            window.history.pushState(null, '', destination.hash);
        }

        const reducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        ).matches;
        anchorTarget.scrollIntoView({
            behavior: reducedMotion ? 'auto' : 'smooth',
            block: 'start',
        });

        if (anchorTarget.id === 'main') {
            anchorTarget.setAttribute('tabindex', '-1');
            anchorTarget.focus({ preventScroll: true });
        }
    },
    { capture: true },
);
