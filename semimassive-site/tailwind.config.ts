import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: {
          800: 'var(--color-base-800)',
          900: 'var(--color-base-900)',
          950: 'var(--color-base-950)',
        },
        text: {
          100: 'var(--color-text-100)',
          300: 'var(--color-text-300)',
        },
        aqua: {
          400: 'var(--aqua-400)',
          500: 'var(--aqua-500)',
          600: 'var(--aqua-600)',
          700: 'var(--aqua-700)',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      transitionTimingFunction: {
        'out-smooth': 'var(--ease-out)',
      },
      transitionDuration: {
        quick: 'var(--dur-quick)',
        soft: 'var(--dur-soft)',
        slow: 'var(--dur-slow)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};

export default config;
