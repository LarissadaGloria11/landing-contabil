<!-- Copilot instructions for contributing code to this repository -->
# Copilot / AI agent instructions

This project is a small Vite + React single-page landing app. Keep changes focused, minimal, and aligned with existing style.

- **Big picture:** Frontend-only landing page built with Vite + React. Entrypoint: [index.html](index.html) → [src/main.jsx](src/main.jsx) → [src/App.jsx](src/App.jsx). Styles live in [src/index.css](src/index.css) and [src/App.css](src/App.css).

- **Why the structure:** Simple SPA (no router) so features are implemented directly in `App.jsx`. State is local via React `useState` (see FAQ toggle and dark-mode toggle in [src/App.jsx](src/App.jsx)). Keep components small and place new UI code under `src/`.

- **Build & dev workflows:**
  - Start dev server: `npm run dev` (uses Vite). See `[package.json](package.json)` scripts.
  - Production build: `npm run build` → Vite outputs to `dist/`.
  - Preview build: `npm run preview`.
  - Lint: `npm run lint` (ESLint configured in repo root).

- **CI / Deploy:** There is a deploy workflow at [.github/workflows/deploy.yml](.github/workflows/deploy.yml). Check it before modifying build-related files.

- **Project-specific patterns & conventions:**
  - Single-file UI: most page logic lives in `src/App.jsx`. Example patterns:
    - Contact form uses inline validation in `handleSubmit` — follow the same simple alert-and-reset approach for small UX flows.
    - FAQ items are rendered from an inline array and toggled by index — follow the same index-based toggle if adding similar lists.
  - Theme toggle: toggles a `dark` class on the root `<div>`; styles rely on that selector in `src/App.css`.
  - Images: external URLs are used (see hero image in `src/App.jsx`). When adding assets, prefer local files under `src/assets/` or `public/` and reference them with `/` paths.

- **Code style & edits:**
  - ES Module project (`"type": "module"` in [package.json](package.json)). Use import/export syntax.
  - Keep edits minimal and focused: change the smallest set of files necessary. Prefer adding small components under `src/` rather than reshaping `App.jsx` unless feature size justifies it.
  - No tests are present. Do not add heavy test scaffolding without a brief note.

- **Examples of common edits:**
  - To change hero image: update the `img` `src` in [src/App.jsx](src/App.jsx).
  - To update the WhatsApp contact: edit the `href` in the `.whatsapp` anchor in [src/App.jsx](src/App.jsx).
  - To add a new service card: append a new `.card` div in the `grid` section of [src/App.jsx](src/App.jsx) and add styles in [src/App.css](src/App.css).

- **When proposing larger refactors:**
  - Describe the goal, list the files to change, and include a minimal migration plan (examples: extract UI into `src/components/`, move common styles to a shared CSS file).
  - Ensure `npm run dev` still starts and `npm run build` succeeds.

- **Safety checks before PRs:**
  - Run `npm run lint` and fix reported issues.
  - Verify dev server runs and the main page renders (open Vite URL in browser).
  - Avoid changing CI workflow unless necessary; coordinate in the PR description.

If anything in these notes is unclear or you want more examples (component split, style patterns, or deployment details), tell me which area to expand.
