# Semimassive Site

Modern marketing website for a product development consultancy built with Next.js 15, React 18, and MDX-based content management.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Run production server
pnpm start
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

## 📝 Content Management

### Adding Case Studies

1. Create a new `.mdx` file in `/content/work/`
2. Add validated frontmatter (see existing files for schema)
3. Write content using Markdown and custom components
4. Add images to `/public/work/<slug>/`

Example frontmatter:

```yaml
---
title: 'Your Case Study Title'
client: 'Client Name'
year: 2024
role: 'UX Engineering'
featured: true
summary: 'Brief description of the project...'
impact:
  - value: '2M+'
    label: 'Users reached'
pillars:
  - 'Product-Market Fit'
  - 'User Onboarding'
---
```

### Custom MDX Components

Available in all `.mdx` files:

- `<Section>` - Responsive container with viewport animations
- `<Prose>` - Typography wrapper for long-form content
- `<Metric>` - Impact metric display (value + label)
- `<Figure>` - Image/video component with captions
- `<Snapshot>` - Problem/Constraint/Result three-column layout
- `<CTA>` - Call-to-action buttons (primary/secondary)

## 🛠️ Development Scripts

```bash
pnpm dev         # Start development server
pnpm build       # Build for production + generate sitemap
pnpm start       # Start production server
pnpm lint        # Run ESLint
pnpm format      # Format code with Prettier
pnpm typecheck   # Type-check with TypeScript
pnpm test        # Run tests with Vitest
pnpm test:ui     # Run tests with UI
```

### Bundle Analysis

```bash
ANALYZE=true pnpm build
```

Opens webpack bundle analyzer to inspect bundle sizes.

## 🌍 Environment Variables

Create `.env.local` (not committed) with:

```bash
# Required for production builds
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Optional: Enable Plausible analytics in production
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
```

## ♿ Accessibility

This site is built with accessibility as a priority:

- **Reduced Motion**: All animations respect `prefers-reduced-motion` preference
- **Semantic HTML**: Proper heading hierarchy, landmarks, and ARIA labels
- **Keyboard Navigation**: Skip links, focus management, and visible focus indicators
- **WCAG Compliance**: Enforced via `eslint-plugin-jsx-a11y`

## 🎨 Design System

### Colors

- **Neutrals**: Warm dark palette (`base-950`, `base-900`, `base-800`)
- **Accents**: Aqua electric (`aqua-400` → `aqua-700`)
- **Tiered States**: Default → Hover → Active → Focus

### Motion

- **Viewport Reveals**: Sections fade and rise as you scroll
- **Route Transitions**: Smooth page transitions
- **Progress Bar**: Reading indicator on case studies
- **Timing**: Three-tier system (quick/soft/slow)

All motion is disabled by default until user preference is confirmed.

## 🧪 Testing

Tests use Vitest + React Testing Library:

```bash
# Run tests once
pnpm test -- --run

# Watch mode
pnpm test

# With UI
pnpm test:ui
```

Add tests in `__tests__/` directory.

## 🔄 CI/CD

GitHub Actions workflow (`.github/workflows/ci.yml`) runs on every push:

1. Type checking (`pnpm typecheck`)
2. Linting (`pnpm lint`)
3. Build (`pnpm build`)
4. Tests (`pnpm test -- --run`)

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI**: React 18, TypeScript 5
- **Styling**: Tailwind CSS 3
- **Content**: MDX, Zod validation
- **Motion**: Framer Motion 11
- **Testing**: Vitest, React Testing Library
- **Analytics**: Plausible (opt-in)
- **Deployment**: Vercel (recommended)

## 📂 Project Structure

```
semimassive-site/
├── app/                    # Next.js App Router pages
│   ├── (routes)/          # Page routes
│   ├── api/og/            # OG image generation
│   └── layout.tsx         # Root layout
├── components/            # React components
│   └── motion/           # Animation utilities
├── content/work/         # MDX case studies
├── lib/                  # Utilities and helpers
├── public/               # Static assets
├── __tests__/           # Test files
└── styles/              # Global CSS
```

## 🚢 Deployment

This site is optimized for deployment on [Vercel](https://vercel.com):

1. Push to GitHub
2. Import project to Vercel
3. Set environment variables
4. Deploy

The build process automatically generates:
- Optimized static pages
- `sitemap.xml` and `robots.txt`
- Dynamic OG images

## 📄 License

© 2025 Semimassive. All rights reserved.
