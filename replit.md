# Semimassive Site

## Overview

Semimassive is a modern marketing website for a product development consultancy specializing in AI, XR, and behavior-driven systems. The site showcases the company's expertise in building next-generation product experiences using Next.js 15 and React 18. It features a minimal, high-performance architecture, warm dark aesthetics with aqua accents, and a focus on polished user experience. The site includes a homepage, dynamic case studies, and placeholder pages for services and company information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend

-   **Framework**: Next.js 15 with App Router for modern React Server Components, improved routing, and performance.
-   **Styling**: Tailwind CSS with custom design tokens (CSS variables for colors, typography, motion) for rapid and consistent development.
-   **Typography**: Google Fonts (Inter for headings, Plus Jakarta Sans for body) via Next.js font optimization.
-   **Design System**: Warm dark palette with aqua electric accents, three-tier motion system (Framer Motion), and tiered interaction states.
-   **Component Structure**: Root layout for consistent header/footer and accessibility, individual route modules, and dedicated content components (e.g., Section, Prose, Metric, Figure, Snapshot, CTA).
-   **MDX-Based Content**: File-based system for case studies using MDX with Zod-validated frontmatter, enabling type-safe, git-versioned content.

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

### Analytics

-   Plausible (conditional integration)

### SEO

-   `next-sitemap` (for sitemap and robots.txt generation)