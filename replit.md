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
- Motion system: Three-tier timing (quick/soft/slow) with custom easing function
- Component patterns: Button primary styles, proof chips, prose styles for future MDX content

### Component Structure

**Layout Pattern**: Root layout with skip-to-content accessibility
- **Problem**: Need consistent header/footer across all pages while maintaining accessibility
- **Solution**: RootLayout component with semantic HTML and ARIA labels
- **Implementation**: Navigation in header, main content area, skip link for keyboard users

**Page Architecture**: Individual route modules in `/app` directory
- Home page: Hero section with value proposition, CTA, and social proof chips
- Work/Services/About: Placeholder pages for future content expansion
- **Future consideration**: MDX integration planned (evidenced by prose.css styles)

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

### Development Tooling

**Code Quality**:
- ESLint with Next.js core web vitals rules
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