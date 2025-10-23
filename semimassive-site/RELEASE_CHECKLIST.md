# Release Checklist

## Pre-Deployment

- [ ] Set `NEXT_PUBLIC_SITE_URL` in `.env.local` to your production domain.
- [ ] Verify canonical tags and sitemap URLs use production domain.
- [ ] Generate and add favicon files to `/public/`:
  - [ ] `favicon.ico` (32x32)
  - [ ] `apple-touch-icon.png` (180x180)
  - [ ] `icon-192.png` (192x192)
  - [ ] `og.png` (1200x630 default social image)

## Quality Checks

- [ ] Lighthouse: Performance ≥ 90, A11y ≥ 95, Best Practices ≥ 95.
- [ ] 404/500 pages render properly.
- [ ] Scroll progress bar appears only on long case studies.
- [ ] Skip to content link works (Tab → Enter from top of page).
- [ ] Focus rings visible on all interactive elements.
- [ ] Breadcrumbs appear on case study pages.

## Analytics & Tracking

- [ ] Plausible domain set in `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` (optional).
- [ ] CTA clicks tracked (check browser console for events when Plausible is enabled).

## Content Review

- [ ] All case studies have proper frontmatter (title, slug, summary, impact, lastmod).
- [ ] Hero images use `priority` prop.
- [ ] All images have descriptive `alt` text.
- [ ] Meta descriptions ≤ 155 characters.
- [ ] Summaries use action/result language.

## Technical Validation

- [ ] Run: `pnpm typecheck` (no TypeScript errors)
- [ ] Run: `pnpm lint` (no linting errors)
- [ ] Run: `pnpm build` (successful production build)
- [ ] Run: `pnpm test` (all tests pass)
- [ ] Verify sitemap.xml and robots.txt are generated correctly.

## Accessibility

- [ ] Test keyboard navigation (Tab through all interactive elements).
- [ ] Test with screen reader (VoiceOver/NVDA).
- [ ] Verify all links have descriptive text (no "click here").
- [ ] Check color contrast meets WCAG AA standards.
- [ ] Test with reduced motion preference enabled.

## Performance

- [ ] Check Core Web Vitals in production.
- [ ] Verify no layout shift (CLS < 0.1).
- [ ] Images load with proper sizes attributes.
- [ ] Fonts load with swap strategy (no FOIT).

## Final Steps

- [ ] Commit all changes to version control.
- [ ] Push to GitHub `main` branch.
- [ ] Deploy to production.
- [ ] Verify production site loads correctly.
- [ ] Test on mobile devices.
- [ ] Share with stakeholders.

## Post-Launch

- [ ] Monitor analytics for the first 24 hours.
- [ ] Check for any error reports.
- [ ] Verify search engine indexing (Google Search Console).
- [ ] Update social media links if needed.
