# Semimassive Site

## Overview

Semimassive is a modern marketing website for a product development consultancy specializing in AI, XR, and behavior-driven systems. The site showcases the company's expertise in building next-generation product experiences. Built with Next.js 15 and React 18, it features a minimal, high-performance architecture focused on delivering a polished user experience with warm dark aesthetics and aqua accent colors.

The site currently consists of a homepage with a hero section highlighting value propositions and social proof, along with placeholder pages for Work, Services, and About sections that will be populated with case studies and detailed content.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: Next.js 15 with App Router
- **Rationale**: App Router provides modern React Server Components, improved routing, and better performance through automatic code splitting
- **Alternatives**: Could use Pages Router, but App Router is the current Next.js standard with better developer experience
- **Pros**: Server-side rendering by default, improved SEO, better performance, cleaner file-based routing
- **Cons**: Newer paradigm requires learning curve for traditional React developers

**Styling Approach**: Tailwind CSS with custom design tokens
- **Rationale**: Utility-first CSS enables rapid development while maintaining consistency through CSS variables for theming
- **Key Decision**: Design tokens defined in CSS custom properties (`:root` variables) for colors, typography, and motion
- **Pros**: Highly maintainable color system, easy theme modifications, consistent spacing and timing
- **Cons**: Requires discipline to avoid inline style sprawl

**Typography System**: Google Fonts (Inter + Plus Jakarta Sans)
- **Rationale**: Inter for headings (weights 600-800) provides strong visual hierarchy; Plus Jakarta Sans for body text (weights 400-600) offers excellent readability
- **Implementation**: Font variables injected via Next.js font optimization with `display: swap` for performance
- **Pros**: Professional appearance, optimized loading, no FOUT (Flash of Unstyled Text)

**Design System**:
- Color palette: Warm dark neutrals (base-950/900/800) with aqua electric accents (400-700 range)
- Motion system: Three-tier timing (quick/soft/slow) with custom easing function, framer-motion for viewport reveals and route transitions
- Tiered interaction states: aqua-400 (default) → aqua-500 (hover) → aqua-600 (active) → aqua-700 (focus) with micro-pulse animation on hover
- Component patterns: Button primary styles, proof chips, prose styles for MDX content

### Component Structure

**Layout Pattern**: Root layout with skip-to-content accessibility
- **Problem**: Need consistent header/footer across all pages while maintaining accessibility
- **Solution**: RootLayout component with semantic HTML and ARIA labels
- **Implementation**: Navigation in header, main content area, skip link for keyboard users

**Page Architecture**: Individual route modules in `/app` directory
- Home page: Hero section with value proposition, CTA, and social proof chips
- Work: Dynamic case study listing and individual pages powered by MDX
- Services/About: Placeholder pages for future content expansion

### Styling Architecture

**Tailwind Configuration**:
- Extended theme with custom color mappings to CSS variables
- Custom font families mapped to CSS variables
- Transition utilities for consistent animations
- Plugins: `@tailwindcss/typography` (for future MDX), `@tailwindcss/forms` (for future contact forms)

**CSS Organization**:
- `globals.css`: Base styles, CSS variables, Tailwind layers
- `prose.css`: Prepared for future MDX/markdown content rendering
- Scoped component styles: Defined inline with Tailwind utilities

**Responsive Design**: Mobile-first approach with `md:` breakpoint modifiers

### TypeScript Configuration

**Strict Mode Enabled**: Full type safety with strict compiler options
- `strict: true` enforces null checks, strict function types, and other safety features
- Path aliases configured (`@/*`) for cleaner imports
- Next.js plugin enabled for enhanced TypeScript support

### Content Management System (Added Oct 23, 2025)

**MDX-Based Case Studies**: File-based content system for work portfolio
- **Implementation**: MDX files in `/content/work/` with Zod-validated frontmatter
- **Rationale**: Provides type-safe, git-versioned content that designers/engineers can edit directly
- **Features**: 
  - Frontmatter validation with Zod schema (title, client, year, role, impact, pillars, etc.)
  - Custom components (Section, Prose, Metric, Figure, Snapshot, CTA) available in MDX
  - Automatic static generation of all case study pages
  - SEO metadata and JSON-LD structured data per case study
- **Content Flow**: 
  1. Create `.mdx` file in `/content/work/`
  2. Add validated frontmatter (title, summary, impact metrics, etc.)
  3. Write content using Markdown + custom React components
  4. Automatically appears on `/work` listing and generates `/work/[slug]` route

**Content Components** (located in `/components/`):
- `Section`: Responsive container with viewport reveal animations (respects reduced motion), semantic HTML preservation, configurable spacing and bleed options
- `Prose`: Typography wrapper for readable long-form content
- `Metric`: Impact metric display (value + label) for case study headers
- `Figure`: Image/video component with optional captions
- `Snapshot`: Three-column Problem/Constraint/Result layout
- `CTA`: Primary/secondary call-to-action buttons with link functionality
- `ProgressBar`: Scroll progress indicator for long-form content (appears on case study pages)
- `PageTransition`: Route transition wrapper with fade animations (respects reduced motion)

**Content Utilities** (located in `/lib/`):
- `mdx.ts`: getAllWork() and getWorkBySlug() for content loading, compileMdx() for rendering
- `types.ts`: Zod schema for frontmatter validation
- `images.ts`: Image dimension and aspect ratio helpers

**Current Case Studies**:
- XDefiant — Onboarding uplift at scale (Ubisoft, 2024) - Featured
- Atlas Obscura VR — Completion through curiosity (Atlas Obscura / Meta, 2018)

### Motion System (Added Oct 23, 2025)

**Framer Motion Integration**: Purposeful, accessibility-first animations
- **Implementation**: Client-side animations with reduced-motion detection defaulting to motion-disabled
- **Rationale**: Enhances user experience while respecting accessibility preferences (prefers-reduced-motion)
- **Features**:
  - Viewport reveal animations (fade + rise) on Section components with `once: true` and `-100px` margin
  - Route transitions with fade effects via PageTransition wrapper
  - Reading progress bar on case study pages (spring-based, respects reduced motion)
  - Semantic HTML preservation: motion.section, motion.article, motion.aside maintain proper HTML structure
- **Accessibility**: useReducedMotion() hook initializes to `true` (safe default), only enables motion after client-side matchMedia check confirms user preference

**Motion Utilities** (located in `/components/motion/`):
- `atoms.ts`: fadeIn and riseIn animation variants for consistent motion language
- `ReducedMotionGate.tsx`: Accessibility-first hook and component for conditional animation rendering

### SEO Infrastructure (Added Oct 23, 2025)

**Dynamic OG Image Generation**: @vercel/og API route
- **Implementation**: `/app/api/og/route.tsx` generates social media cards on-the-fly with ImageResponse
- **Parameters**: title, subtitle, client, year (all optional, fallback to "Semimassive")
- **Integration**: Case study pages automatically generate OG images via metadata.openGraph.images
- **Rationale**: Improves social sharing appearance without manual image creation or storage

**Automated Sitemap Generation**: next-sitemap
- **Implementation**: Automatically generates sitemap.xml and robots.txt on every build
- **Configuration**: All routes (/, /work, /about, /services) with priorities (homepage=1.0, others=0.7)
- **Rationale**: Essential for search engine discovery and crawling efficiency

**Metadata System**: generateMetadata on all pages
- **Implementation**: Each page has canonical URLs, OpenGraph tags, Twitter card metadata, and dynamic OG images
- **Rationale**: Improves social sharing and search engine understanding

**Security Headers**: Configured in next.config.ts
- Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- **Rationale**: Protects against XSS, clickjacking, and other security vulnerabilities

**Accessibility**: ESLint jsx-a11y plugin enabled
- **Implementation**: Enforces WCAG accessibility rules during linting
- **Rationale**: Ensures the site is accessible to all users including those with disabilities

**Analytics Placeholder**: Plausible (commented out)
- **Implementation**: Privacy-focused analytics ready to enable in production
- **Note**: Uncomment in layout.tsx and set NEXT_PUBLIC_PLAUSIBLE_DOMAIN when ready

### Development Tooling

**Code Quality**:
- ESLint with Next.js core web vitals rules and jsx-a11y accessibility plugin
- Prettier for consistent code formatting
- TypeScript type checking in CI/CD pipelines

**Scripts**:
- `dev`: Development server
- `build`: Production build
- `format`: Prettier formatting across all files
- `typecheck`: Type validation without emission

### Performance Considerations

**React Strict Mode**: Enabled to catch potential issues during development
- Helps identify unsafe lifecycles and legacy API usage
- Double-invokes effects in development for debugging

**Font Optimization**: Next.js automatic font optimization
- Self-hosts Google Fonts for privacy and performance
- Automatic font subsetting and preloading

**Build Optimization**: Next.js built-in optimizations
- Automatic code splitting
- Image optimization (though not currently utilized)
- Static generation where possible

## External Dependencies

### Core Framework
- **next** (v15.0.0): React framework for production
- **react** (v18.3.0) / **react-dom** (v18.3.0): UI library

### Content & MDX
- **next-mdx-remote**: RSC-compatible MDX compiler for case studies
- **gray-matter**: Frontmatter parsing from MDX files
- **remark-gfm**: GitHub Flavored Markdown support
- **rehype-slug**: Automatic heading IDs for anchor links
- **rehype-autolink-headings**: Linkable headings
- **rehype-pretty-code**: Code syntax highlighting

### Motion & Animation
- **framer-motion** (v11.15.0): Declarative animations with accessibility support
- **@vercel/og** (v0.6.14): Dynamic Open Graph image generation

### Styling
- **tailwindcss** (v3.4.14): Utility-first CSS framework
- **@tailwindcss/typography**: Plugin for prose content styling (prepared for future MDX)
- **@tailwindcss/forms**: Form styling plugin (prepared for future contact forms)
- **autoprefixer** / **postcss**: CSS processing

### Development Tools
- **typescript** (v5.6.0): Type safety and developer experience
- **eslint** / **eslint-config-next**: Code linting
- **prettier** (v3.3.3): Code formatting

### Font Delivery
- **Google Fonts API**: Inter and Plus Jakarta Sans families
- Delivered via Next.js font optimization system (no direct API dependency)

### Future Integration Points
- MDX support suggested by typography plugin and prose.css
- Form handling suggested by forms plugin
- Potential CMS integration for Work/Services/About content
- Analytics integration (not yet implemented)
- Contact form backend (CTA present but not implemented)