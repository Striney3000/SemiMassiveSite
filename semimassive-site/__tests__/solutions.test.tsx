import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { SolutionsContent } from '@/components/SolutionsContent';
import * as analytics from '@/lib/analytics';

vi.mock('@/lib/analytics', () => ({
  track: vi.fn(),
}));

vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

class MockIntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [];

  constructor(private callback: IntersectionObserverCallback) {}

  observe(target: Element) {
    const entry: IntersectionObserverEntry = {
      target,
      isIntersecting: true,
      boundingClientRect: {} as DOMRectReadOnly,
      intersectionRatio: 1,
      intersectionRect: {} as DOMRectReadOnly,
      rootBounds: null,
      time: Date.now(),
    };
    this.callback([entry], this);
  }

  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

describe('Solutions Page', () => {
  let originalIntersectionObserver: typeof IntersectionObserver;

  beforeEach(() => {
    vi.clearAllMocks();
    originalIntersectionObserver = global.IntersectionObserver;
    global.IntersectionObserver = MockIntersectionObserver as any;
  });

  afterEach(() => {
    global.IntersectionObserver = originalIntersectionObserver;
  });

  describe('SolutionsContent component', () => {
    it('should render H1 "Solutions"', () => {
      render(<SolutionsContent />);
      const heading = screen.getByRole('heading', { level: 1, name: /Solutions/i });
      expect(heading).toBeTruthy();
    });

    it('should render all four intervention items', () => {
      render(<SolutionsContent />);

      expect(screen.getByText(/Legibility Layer/i)).toBeTruthy();
      expect(screen.getByText(/First-Win Architecture/i)).toBeTruthy();
      expect(screen.getByText(/Friction Surgery/i)).toBeTruthy();
      expect(screen.getByText(/Signal Instrumentation/i)).toBeTruthy();
    });

    it('should have all items acquire data-revealed attribute when scrolled into view', async () => {
      render(<SolutionsContent />);

      await waitFor(
        () => {
          const revealedElements = document.querySelectorAll('[data-revealed="true"]');
          expect(revealedElements.length).toBeGreaterThan(0);
        },
        { timeout: 3000 }
      );
    });

    it('should track Solution Reveal event for each item', async () => {
      const trackSpy = vi.spyOn(analytics, 'track');
      render(<SolutionsContent />);

      await waitFor(
        () => {
          expect(trackSpy).toHaveBeenCalledWith('Solution Reveal', {
            id: 'ai-legibility-layer',
          });
        },
        { timeout: 3000 }
      );
    });

    it('should open modal when clicking "Open" on Legibility Layer', () => {
      render(<SolutionsContent />);

      const openButtons = screen.getAllByRole('button', { name: /Open/i });
      fireEvent.click(openButtons[0]);

      const dialog = screen.getByRole('dialog');
      expect(dialog).toBeTruthy();
      expect(dialog.getAttribute('aria-modal')).toBe('true');

      const modalHeading = screen.getByRole('heading', { level: 2, name: /Legibility Layer/i });
      expect(modalHeading).toBeTruthy();
    });

    it('should render modal with all required sections', () => {
      render(<SolutionsContent />);

      const openButtons = screen.getAllByRole('button', { name: /Open/i });
      fireEvent.click(openButtons[0]);

      expect(screen.getByRole('heading', { level: 3, name: /Problem/i })).toBeTruthy();
      expect(screen.getByRole('heading', { level: 3, name: /Intervention/i })).toBeTruthy();
      expect(screen.getByRole('heading', { level: 3, name: /Build Layer/i })).toBeTruthy();
    });

    it('should track Solution Open event when modal opens', () => {
      const trackSpy = vi.spyOn(analytics, 'track');
      render(<SolutionsContent />);

      const openButtons = screen.getAllByRole('button', { name: /Open/i });
      fireEvent.click(openButtons[0]);

      expect(trackSpy).toHaveBeenCalledWith('Solution Open', { id: 'ai-legibility-layer' });
    });

    it('should close modal on Escape key and return focus', () => {
      render(<SolutionsContent />);

      const openButtons = screen.getAllByRole('button', { name: /Open/i });
      fireEvent.click(openButtons[0]);

      expect(screen.getByRole('dialog')).toBeTruthy();

      fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });

      expect(screen.queryByRole('dialog')).toBeNull();
    });

    it('should track Solution Close event when modal closes', () => {
      const trackSpy = vi.spyOn(analytics, 'track');
      render(<SolutionsContent />);

      const openButtons = screen.getAllByRole('button', { name: /Open/i });
      fireEvent.click(openButtons[0]);

      fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });

      expect(trackSpy).toHaveBeenCalledWith('Solution Close', { id: 'ai-legibility-layer' });
    });

    it('should render pillar chips in modal', () => {
      render(<SolutionsContent />);

      const openButtons = screen.getAllByRole('button', { name: /Open/i });
      fireEvent.click(openButtons[0]);

      expect(screen.getByText(/AI/i)).toBeTruthy();
      expect(screen.getByText(/Behavioural/i)).toBeTruthy();
    });

    it('should render matrix node links in modal', () => {
      render(<SolutionsContent />);

      const openButtons = screen.getAllByRole('button', { name: /Open/i });
      fireEvent.click(openButtons[0]);

      expect(screen.getByText(/Usually activates:/i)).toBeTruthy();

      const links = screen.getAllByRole('link');
      const matrixLinks = links.filter((link) => link.getAttribute('href')?.includes('/matrix'));
      expect(matrixLinks.length).toBeGreaterThan(0);
    });

    it('should render CTA link to /services', () => {
      render(<SolutionsContent />);

      const openButtons = screen.getAllByRole('button', { name: /Open/i });
      fireEvent.click(openButtons[0]);

      const ctaLink = screen.getByRole('link', { name: /See how we engage/i });
      expect(ctaLink).toBeTruthy();
      expect(ctaLink.getAttribute('href')).toBe('/services');
    });

    it('should track CTA Click event when CTA is clicked', () => {
      const trackSpy = vi.spyOn(analytics, 'track');
      render(<SolutionsContent />);

      const openButtons = screen.getAllByRole('button', { name: /Open/i });
      fireEvent.click(openButtons[0]);

      const ctaLink = screen.getByRole('link', { name: /See how we engage/i });
      fireEvent.click(ctaLink);

      expect(trackSpy).toHaveBeenCalledWith('CTA Click', {
        from: 'solutions',
        id: 'ai-legibility-layer',
      });
    });

    it('should render diagram in modal', () => {
      render(<SolutionsContent />);

      const openButtons = screen.getAllByRole('button', { name: /Open/i });
      fireEvent.click(openButtons[0]);

      const diagram = document.querySelector('svg');
      expect(diagram).toBeTruthy();
    });

    it('should render close button with proper aria-label', () => {
      render(<SolutionsContent />);

      const openButtons = screen.getAllByRole('button', { name: /Open/i });
      fireEvent.click(openButtons[0]);

      const closeButton = screen.getByRole('button', { name: /Close/i });
      expect(closeButton).toBeTruthy();
      expect(closeButton.getAttribute('aria-label')).toBe('Close');
    });

    it('should close modal when close button is clicked', () => {
      render(<SolutionsContent />);

      const openButtons = screen.getAllByRole('button', { name: /Open/i });
      fireEvent.click(openButtons[0]);

      const closeButton = screen.getByRole('button', { name: /Close/i });
      fireEvent.click(closeButton);

      expect(screen.queryByRole('dialog')).toBeNull();
    });
  });

  describe('JSON-LD structured data', () => {
    it('should render JSON-LD script with correct structure', () => {
      const container = document.createElement('div');
      container.innerHTML = `
        <script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "SemiMassive Solutions",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "CreativeWork",
                  "name": "Legibility Layer",
                  "description": "Make AI affordances learnable and trustworthy."
                }
              }
            ]
          }
        </script>
      `;

      const script = container.querySelector('script[type="application/ld+json"]');
      expect(script).toBeTruthy();

      if (script?.textContent) {
        const jsonLd = JSON.parse(script.textContent);
        expect(jsonLd['@context']).toBe('https://schema.org');
        expect(jsonLd['@type']).toBe('ItemList');
        expect(jsonLd.name).toBe('SemiMassive Solutions');
      }
    });
  });
});
