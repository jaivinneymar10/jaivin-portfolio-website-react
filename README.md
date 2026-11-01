# Jaivin A — React Portfolio

## Run locally
Requires Node.js 18+ (Node.js 20+ recommended).

```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Structure
- `src/components/` contains the requested section components.
- `src/content.js` contains the original section markup, split by component.
- `src/style.css` is the original stylesheet, retained unchanged.
- `public/script.js` is the original interaction script, retained for compatibility during the structural migration.
- `Education.jsx` is a placeholder because the supplied website does not contain a standalone Education section.

## Important migration note
This is a safe structural first pass: each section is mounted through its own React component, while original markup, CSS, and legacy interactions are preserved. The original interaction script still uses DOM event listeners. Those should be migrated incrementally to React state/event handlers and tested section-by-section before deleting `public/script.js`; removing it now would break existing interactions.
