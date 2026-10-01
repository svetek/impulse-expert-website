# Atomic Design

The visual component library follows five composition levels:

- **Atoms** are indivisible controls, labels, and icons. They own their visual states and do not import other UI levels.
- **Molecules** combine atoms into small reusable interface units, such as the brand or a composed visual.
- **Organisms** are complete interface regions, such as the header, footer, and page sections.
- **Templates** define page structure with slots and contain no locale-specific copy of their own.
- **Pages** fill templates with localized production content.

Dependencies flow from larger levels to smaller levels:

```text
pages → templates → organisms → molecules → atoms
```

Components may skip a level when an intermediate abstraction would not be useful. Technical concerns such as SEO, Astro routes, layouts, localization models, and Cloudflare configuration remain outside the visual hierarchy.

There are two component scopes:

- `src/components` contains UI reusable across site features.
- `src/features/*/ui` contains UI coupled to one business feature and repeats only the Atomic levels that feature needs. For example, service icons, service visuals, and the services section belong to `service-offerings` rather than the shared library.

The dependency direction remains the same inside a feature. Shared components must not import feature components; feature components may reuse shared atoms and molecules. Pages are the composition root where shared and feature UI meet.

When adding a component, choose the lowest level at which it remains independently meaningful. Do not create a component solely to satisfy the hierarchy; extract it when it owns behavior, variants, accessibility, or reusable styling.
