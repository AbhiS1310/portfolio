# Abhishek Chaudhary — Portfolio

A recruiter-facing AI/ML engineering portfolio built with Next.js, React, TypeScript, and Tailwind. The editorial casebook presents employer contributions and personal projects separately, with architecture and limitations in native accessible dialogs.

## Local development

Use Node.js 20.9 or newer. Install dependencies with `npm ci`, then run `npm run dev` and open the URL printed by Next.js. On Windows with PowerShell script restrictions, use `npm.cmd` and `npx.cmd`.

## Content and design

- `src/data/portfolio.ts`: biography, projects, employment, and skills.
- `src/components/Portfolio.tsx`: homepage and direct contact interactions.
- `src/components/ProjectModal.tsx`: native dialog with architecture and contribution details.
- `src/components/ProjectVisual.tsx`: conceptual vector illustrations, not product screenshots.
- `src/app/globals.css`: responsive design tokens and component styling.
- `PRODUCT.md` and `DESIGN.md`: approved product facts and design system.
- `.impeccable/design.json`: design-system component previews and supplementary tokens.

Keep claims tied to supporting evidence. DesignDeck is pre-release; floor-plan generation is experimental. Employer projects have no public repository links. Personal projects link to their actual repositories. The resume link remains the existing Google Drive URL; replace it only when an updated PDF is available.

## Checks and static export

Run `npx tsc --noEmit --incremental false`, `npm run lint`, and `npm run build`. The build exports to `out/`. For GitHub Pages, set `NEXT_PUBLIC_BASE_PATH=/portfolio` during the build. The existing GitHub Actions workflow handles the Pages base path; no hosting migration is needed.

Manrope is self-hosted from `public/fonts/` under the included SIL Open Font License. Contact uses direct email, copy-email, and LinkedIn. No EmailJS credentials, backend service, or contact form is required.

## Verification status

TypeScript, ESLint, root/base-path production builds, static asset references, navigation anchors, and content scans were checked. Live browser visual/interaction verification remains pending: the session's browser automation stopped because it could not confidently determine the active browser URL. Legacy generated setup documents may describe the replaced neon/terminal implementation; current source, PRODUCT.md, and DESIGN.md are authoritative.
