# Editing Content (SemiMassive)

## Add or edit a case study

1. Duplicate an MDX in `/content/work/`.
2. Update frontmatter (title, slug, summary, impact, lastmod).
3. Export images to `/public/work/<slug>/` as WebP/AVIF; set `thumbnail` and `hero`.
4. Write sections using the **Strategic & concise** format:
   - Snapshot (Problem / Constraint / Result)
   - Context
   - Constraint → Breakthrough
   - System decision → UX expression
   - Outcome
   - Transferable pattern
   - If extended…
5. `pnpm dev` to preview; `pnpm build` to verify sitemap/robots; commit and push.

## Media tips

- Hero: 1600–2000px wide, `priority` prop.
- Inline images: export at 2× target size; use `Figure` with `alt` and optional caption.
- Video: short MP4 with poster image, or use Mux later.

## SEO tips

- Keep summaries ≤155 chars for meta descriptions.
- Use action/result language in titles ("Uplift at scale", "Completion through curiosity").
- Update `lastmod` in frontmatter when you edit.

## Common edits

- Homepage proof chips: edit in `app/page.tsx`.
- Add a new section: use `Section` + `Prose`.
- Colors/typography tokens: `tailwind.config` + `globals.css`.

## Component Usage

### Section

Wrap content blocks with animation:

```tsx
<Section>
  <h2>My Section</h2>
  <p>Content here</p>
</Section>
```

### Prose

For rich text content:

```tsx
<Prose>
  <p>Long-form text that needs proper typography...</p>
</Prose>
```

### Figure

For images in case studies:

```tsx
<Figure
  src="/work/project-slug/image.jpg"
  alt="Descriptive alt text"
  caption="Optional caption"
  priority={true} // Only for hero images
/>
```

### Metric

Display key metrics:

```tsx
<Metric value="12M+" label="players at launch" />
```

### Snapshot

Highlight problem/constraint/result:

```tsx
<Snapshot
  problem="Users dropped off during onboarding"
  constraint="3-minute window"
  result="20% uplift in completion"
/>
```

### CTA

Call-to-action buttons with tracking:

```tsx
<CTA href="/contact" trackingLocation="case-study-footer">
  Let's talk
</CTA>
```
