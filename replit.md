# Semimassive Site

## Overview

Semimassive is a modern marketing website for a product development consultancy specializing in AI, XR, and behavior-driven systems. The site showcases the company's expertise in building next-generation product experiences using Next.js 15 and React 18. It features a minimal, high-performance architecture, warm dark aesthetics with aqua accents, and a focus on polished user experience. The site includes a homepage, Solutions showcase at `/interventions` (displaying problem-intervention-result case studies), and placeholder pages for services and company information.

### Recent Changes (October 2025)

**Information Architecture Refactoring**: Renamed "Work" to "Solutions" with route migration from `/work` to `/interventions`:
- Navigation label updated to "Solutions" 
- Route structure: `/interventions` (listing) and `/interventions/[slug]` (detail pages)
- 301 redirects implemented for `/work` and `/solutions` → `/interventions`
- Content model enhanced with Problem → Intervention → Result (PIR) framework
- Card display shows three-line PIR structure for each solution
- Detail pages include compact PIR row above metrics
- All internal links, breadcrumbs, and metadata updated to use `/interventions`

**SEO & Content Quality Enhancement** (Stage 10):
- Enhanced metadata across all Solutions pages with problem → intervention → result messaging
- Implemented smart JSON-LD routing: supports CreativeWork (default), HowTo, and TechArticle schema types
- Schema selection via frontmatter `schemaType` field with optional `howtoSteps` for procedural content
- Added internal linking via "See Also" component (filters by shared pillars)
- Created `WRITING_GUIDE_SOLUTIONS.md` for content authoring standards
- Preview environment noindex protection via `getRobotsForEnvironment()`
- Homepage hero copy tightened to 104 characters with targeted interventions message

**About Page Implementation** (Stage 11):
- Comprehensive About page at `/about` with 8 structured sections: Mission (hero), Why we exist, What we believe, How we work, Studio network, Principles, Founder, Closing CTA
- Large, minimalist layout with breathable spacing and calm motion cues respecting prefers-reduced-motion
- Organization + Person JSON-LD schema for SEO (Nick Strine founder profile)
- Custom components: `AboutPrinciples` (2×3 animated grid), `FounderCard` (bio with LinkedIn link)
- `personJsonLd()` helper added to lib/seo.ts for Person schema generation
- Complete metadata with title "About SemiMassive — Why we exist, what we believe"
- Accessibility-first design with semantic HTML, focus rings, and logical keyboard navigation
- Test coverage in `__tests__/about.test.tsx` verifying page structure and content

**Matrix V2 — Immersive Presence Panels** (Stage 14, October 26, 2025):
- Complete redesign from codename-based to real name + archetype presentation
- Edge-to-edge portrait gallery at `/matrix` with "The Lab" branding
- Full-bleed portrait cards (3:4 aspect ratio) with hover animations and bottom gradient
- Modal overlay expansion showing Identity → Discipline → Outcomes structure
- Custom components:
  - `MatrixCard`: Portrait cards with name/archetype overlay
  - `MatrixExpanded`: Accessible modal with focus management, keyboard trapping, Escape handler
  - `MatrixClient`: Client component for interactivity with state management
  - `lib/ui/motion.ts`: Reusable motion utilities (fadeIn, popIn, hoverPop) with prefers-reduced-motion support
- Data model in `data/matrixData.ts`: name, archetype, identity, discipline, outcomes[]
- AI-generated portrait images for Nova Sato (Interface Architect), Vera Shinn (Telemetry Architect), Caelum Rowe (Value Architect)
- Full accessibility: focus trapping, Escape key, click-outside-to-close, ARIA modal semantics
- Motion respects prefers-reduced-motion media query
- SEO: Server component with generateMetadata + ItemList JSON-LD schema
- Removed old components: NodeGlyph, PillarChips, MatrixFilters, MatrixGrid, expandable cards
- Updated MatrixPeek component to simplified text link

**FlowForge Reframing** (Stage 13):
- Reframed FlowForge from product to internal framework/methodology across all pages
- Services page: H2 changed to "Our method: Adoption Framework", intro reworded to "We use a lightweight framework (internally, 'FlowForge') to design for adoption"
- Removed broken `/about#flowforge` link, replaced with "Coming soon: AI interaction case studies" placeholder
- Matrix data: Nick Strine's description updated to "using the FlowForge framework" with "FlowForge framework" in skills
- Test file updated to expect "Adoption Framework" instead of "FlowForge"
- JSON-LD schema verified: Services page uses Service + HowTo only (no Product schema)
- No remaining references imply FlowForge is a purchasable product

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend

-   **Framework**: Next.js 15 with App Router for modern React Server Components, improved routing, and performance.
-   **Styling**: Tailwind CSS with custom design tokens (CSS variables for colors, typography, motion) for rapid and consistent development.
-   **Typography**: Google Fonts (Inter for headings, Plus Jakarta Sans for body) via Next.js font optimization.
-   **Design System**: Warm dark palette with aqua electric accents, three-tier motion system (Framer Motion), and tiered interaction states.
-   **Component Structure**: Root layout for consistent header/footer and accessibility, individual route modules, and dedicated content components (e.g., Section, Prose, Metric, Figure, Snapshot, CTA).
-   **MDX-Based Content**: File-based system for solutions/interventions using MDX with Zod-validated frontmatter (including optional `problem`, `intervention`, `result` fields), enabling type-safe, git-versioned content. Schema supports both `Intervention` and `CaseStudy` types.

### Backend/DevOps

-   **TypeScript**: Strict mode enabled for full type safety.
-   **Motion System**: Framer Motion for purposeful, accessibility-first animations (viewport reveals, route transitions, reading progress), respecting `prefers-reduced-motion`.
-   **SEO**: Dynamic Open Graph image generation (`@vercel/og`), automated sitemap generation (`next-sitemap`), comprehensive metadata system, and security headers.
-   **Accessibility**: WCAG compliance enforced via ESLint `jsx-a11y`, high-contrast focus rings, smooth scrolling, semantic HTML, and skip-to-content links.
-   **Error Handling**: Custom 404 page and client-side error boundaries.
-   **Performance**: React Strict Mode, Next.js font optimization, and build optimizations.
-   **Development Tooling**: ESLint, Prettier, TypeScript, Vitest with React Testing Library, GitHub Actions for CI/CD (Typecheck, Lint, Build, Test), Plausible analytics (opt-in), and `@next/bundle-analyzer`.
-   **Environment Management**: `.env.example` template for required and optional environment variables.

## External Dependencies

### Core Frameworks

-   `next` (v15.0.0)
-   `react` (v18.3.0)
-   `react-dom` (v18.3.0)

### Content & MDX

-   `next-mdx-remote`
-   `gray-matter`
-   `remark-gfm`
-   `rehype-slug`
-   `rehype-autolink-headings`
-   `rehype-pretty-code`

### Motion & Animation

-   `framer-motion` (v11.15.0)
-   `@vercel/og` (v0.6.14)

### Styling

-   `tailwindcss` (v3.4.14)
-   `@tailwindcss/typography`
-   `@tailwindcss/forms`
-   `autoprefixer`
-   `postcss`

### Development Tools

-   `typescript` (v5.6.0)
-   `eslint`
-   `prettier`

### Analytics & Measurement

-   **Plausible Analytics**: Conditional integration for production environments
-   **Event Tracking System**: Comprehensive analytics tracking for conversion optimization
    -   **TTFC (Time to First CTA Click)**: Measures time from page load to first CTA interaction, tracked per page with automatic reset on navigation
    -   **CTA Click Tracking**: All call-to-action buttons (hero, footer, content) tracked with location and page context
    -   **Solution Card Tracking**: Solution card clicks tracked with position data for engagement analysis (event: "Solution Opened")
    -   **Scroll Milestone Tracking**: Case study read depth tracked at 25%, 50%, 75%, and 90% scroll points
-   **Global Tracking Infrastructure**: 
    -   `lib/analytics.ts`: Core tracking functions with page-specific state management
    -   `hooks/useScrollMilestones.ts`: React hook for scroll depth tracking
    -   `components/GlobalTTFCInitializer.tsx`: Automatic TTFC initialization on all pages
-   **Experiment Tracking**: `CHANGES.md` documents A/B tests and conversion optimization experiments

### SEO

-   `next-sitemap` (for sitemap and robots.txt generation)