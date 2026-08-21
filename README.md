# Cinematic Profile Hub

A high-end personal profile/link-in-bio website built with React, Vite, and Motion for React. The goal is to create a memorable, cinematic alternative to a generic Linktree: one page for a personal introduction, social links, selected work, services, and contact.

## Current direction

- **Mood:** cinematic and minimal
- **Palette:** soft lavender and white, with aubergine and soft coral accents
- **Typography:** editorial display serif paired with a clean sans-serif
- **Visual language:** abstract portrait geometry instead of a real image for now
- **Motion:** subtle scroll reveals, staggered entrances, spring hover states, smooth section transitions, and reduced-motion support

## Where we are

The first build is complete and running in the `profile-hub` web artifact.

Already implemented:

- Responsive desktop and mobile layout
- Top navigation with smooth section links
- Hero section with headline, intro copy, and calls to action
- About section
- Social links
- Selected work / projects section
- Services section
- Contact section with clipboard email interaction
- Footer with social icons and current year
- Motion interactions using `framer-motion`
- `prefers-reduced-motion` accessibility support
- Stable `data-testid` attributes on interactive and meaningful elements
- TypeScript check passes

The live artifact is registered as **Cinematic Profile Hub** with the root preview path `/`.

## Main files

- `artifacts/profile-hub/src/App.tsx` — page content, sections, links, projects, services, and Motion behavior
- `artifacts/profile-hub/src/index.css` — color tokens, typography, layout, responsive styles, and visual system
- `artifacts/profile-hub/package.json` — frontend scripts and dependencies
- `artifacts/profile-hub/vite.config.ts` — Vite configuration

## Personalization still needed

The page currently uses placeholder content for Avery. Replace:

- Name and monogram
- Professional title
- Hero headline
- Short and long bio
- Location
- Email address
- Instagram, LinkedIn, and portfolio URLs
- Project names, descriptions, years, categories, and links
- Service names and descriptions
- Optional real profile image, if the abstract portrait should be replaced

Most short-form data is grouped near the top of `artifacts/profile-hub/src/App.tsx`:

- `email`
- `links`
- `projects`
- `services`

The longer bio, hero copy, labels, and footer name are written directly in the component markup below those constants.

## Run and verify

From the workspace root:

```bash
pnpm --filter @workspace/profile-hub run typecheck
```

The managed preview workflow runs:

```bash
pnpm --filter @workspace/profile-hub run dev
```

The page should be viewed through the Replit preview rather than by starting a separate root-level dev server.

## Suggested next step

Collect the real profile details in one pass, then update `App.tsx` and replace the placeholder identity throughout the page. After personalization, review the copy and links on desktop and mobile, then publish the profile hub when ready.