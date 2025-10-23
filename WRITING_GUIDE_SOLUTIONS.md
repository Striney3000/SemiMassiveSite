# Writing "Solutions" (Intervention slices)

**Goal:** Prove capability via problem → intervention → result, in < 300 words.

## Frontmatter

- `title`: Outcome-oriented.  
- `summary`: 1 sentence; ≤ 155 chars (meta).  
- `problem`, `intervention`, `result`: 1 line each (card + above-the-fold triad).  
- `schemaType`: `Intervention` (default). Use `HowTo` when it's procedural and add `howtoSteps`.
- `pillars`: 2–4 tags (AI, XR, Behaviour, Onboarding, Retention).

## Body (sections)

- **Snapshot** — 1 line + 3 bullets (Problem, Constraint, Result).  
- **Context** — 1–2 lines.  
- **Constraint → Breakthrough** — bullets; finish with the principle.  
- **System decision → UX expression** — 2–3 bullets or a diagram.  
- **Outcome** — 2–3 bullets, quantified when possible.  
- **Transferable pattern** — 1 paragraph: how this applies to SaaS/mobile/AI tools.  
- **If extended…** — 1–3 bullets.

## Style rules

- Active voice. Short lines. No filler.
- No process theatre (personas, big discovery). Only leverage points.
- Prefer verbs that signal change: reduce, increase, clarify, defer, stage, pace.
- Numbers beat adjectives. If NDA: show *delta* not raw numbers.

## Example Frontmatter

```yaml
---
title: "ProductName — Outcome-focused title"
slug: "product-outcome"
client: "Company Name"
year: 2024
role: ["Lead UX/UI", "Systems"]
summary: "One-sentence summary under 155 characters explaining the intervention and result."
impact:
  - "50%+ increase in key metric"
  - "2x conversion on target action"
pillars: ["Onboarding", "Behavioural systems"]
thumbnail: "/work/product/cover.jpg"
hero: "/work/product/hero.jpg"
readingTime: 4
featured: false
schemaType: "Intervention"
lastmod: "2025-10-23"
problem: "Users dropped off during critical flow step"
intervention: "Single-path onboarding with progressive disclosure"
result: "50%+ completion rate increase across 1M+ users"
---
```

## Example with HowTo schema

When the intervention follows a clear procedural pattern:

```yaml
schemaType: "HowTo"
howtoSteps:
  - "Identify the bottleneck in the user flow"
  - "Design single-path intervention with clear progression"
  - "Implement progressive disclosure pattern"
  - "Validate with A/B test across user cohorts"
  - "Scale to full user base after validation"
```

## Writing Tips

1. **Start with outcomes**: Lead with the result, then explain how.
2. **Use concrete numbers**: "20%+ uplift" beats "significant improvement".
3. **Show constraints**: What made this hard? Budget, timeline, tech debt?
4. **Extract the pattern**: Make it transferable to other contexts.
5. **Keep it tight**: Every word should earn its place.

## What NOT to include

- Long process descriptions or timelines
- Stakeholder management details
- Meeting notes or approval flows
- Generic UX principles without application
- Unquantified claims ("much better", "users loved it")

## Quality checklist

Before publishing, verify:

- [ ] Title focuses on outcome, not feature
- [ ] Summary is ≤ 155 characters
- [ ] Problem/Intervention/Result are each one clear line
- [ ] Body is < 300 words
- [ ] At least one quantified metric in impact
- [ ] Transferable pattern section applies to other domains
- [ ] No passive voice or filler words
- [ ] All claims are specific and defensible
