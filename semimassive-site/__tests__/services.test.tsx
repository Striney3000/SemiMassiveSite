import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ServicesContent } from '@/components/ServicesContent';
import ServicesPage from '@/app/services/page';
import * as analytics from '@/lib/analytics';

vi.mock('@/lib/analytics', () => ({
  track: vi.fn(),
}));

vi.mock('framer-motion', () => ({
  motion: {
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe('Services Page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('ServicesContent component', () => {
    it('should render the main heading', () => {
      render(<ServicesContent />);
      const heading = screen.getByRole('heading', {
        level: 1,
        name: /We help teams solve adoption challenges in next-generation products/i,
      });
      expect(heading).toBeTruthy();
    });

    it('should render all three accordion headers', () => {
      render(<ServicesContent />);
      
      expect(screen.getByText(/Users don't reach first success/i)).toBeTruthy();
      expect(screen.getByText(/AI features exist, but users don't adopt/i)).toBeTruthy();
      expect(screen.getByText(/3D or spatial environments impress/i)).toBeTruthy();
    });

    it('should have all accordion panels collapsed by default', () => {
      render(<ServicesContent />);
      
      const buttons = screen.getAllByRole('button');
      buttons.forEach((button) => {
        expect(button.getAttribute('aria-expanded')).toBe('false');
      });
    });

    it('should toggle accordion panel on click and reveal content', () => {
      render(<ServicesContent />);
      
      const firstButton = screen.getByRole('button', {
        name: /Users don't reach first success/i,
      });
      
      expect(firstButton.getAttribute('aria-expanded')).toBe('false');
      
      fireEvent.click(firstButton);
      
      expect(firstButton.getAttribute('aria-expanded')).toBe('true');
      
      const content = screen.getByText(/Hesitation loops where users pause/i);
      expect(content).toBeTruthy();
    });

    it('should track accordion toggle events', () => {
      const trackSpy = vi.spyOn(analytics, 'track');
      render(<ServicesContent />);
      
      const firstButton = screen.getByRole('button', {
        name: /Users don't reach first success/i,
      });
      
      fireEvent.click(firstButton);
      
      expect(trackSpy).toHaveBeenCalledWith('Accordion Toggle', {
        section: 'services',
        item: 'behavioural-systems',
        expanded: true,
      });
    });

    it('should render FlowForge section with all principles', () => {
      render(<ServicesContent />);
      
      expect(screen.getByText(/Our method: FlowForge/i)).toBeTruthy();
      expect(screen.getByText(/Find the First Win/i)).toBeTruthy();
      expect(screen.getByText(/Paced Mastery/i)).toBeTruthy();
      expect(screen.getByText(/Peripheral Feedback/i)).toBeTruthy();
      expect(screen.getByText(/Telemetry Loop/i)).toBeTruthy();
    });

    it('should render engagement model with all phases', () => {
      render(<ServicesContent />);
      
      expect(screen.getByText(/How we work/i)).toBeTruthy();
      expect(screen.getByText(/Diagnostic \(2 weeks\)/i)).toBeTruthy();
      expect(screen.getByText(/Pilot \(1–2 sprints\)/i)).toBeTruthy();
      expect(screen.getByText(/Embedded Co-Dev/i)).toBeTruthy();
    });

    it('should render CTA with tracking', () => {
      const trackSpy = vi.spyOn(analytics, 'track');
      render(<ServicesContent />);
      
      const ctaButton = screen.getByRole('link', { name: /Request an intro/i });
      expect(ctaButton).toBeTruthy();
      
      fireEvent.click(ctaButton);
      
      expect(trackSpy).toHaveBeenCalledWith('CTA Click', {
        location: 'services',
      });
    });

    it('should have proper ARIA attributes on accordion buttons', () => {
      render(<ServicesContent />);
      
      const buttons = screen.getAllByRole('button');
      
      buttons.forEach((button) => {
        expect(button.hasAttribute('aria-expanded')).toBe(true);
        expect(button.hasAttribute('aria-controls')).toBe(true);
      });
    });

    it('should render "See examples" links when accordion is expanded', () => {
      render(<ServicesContent />);
      
      const firstButton = screen.getByRole('button', {
        name: /Users don't reach first success/i,
      });
      
      fireEvent.click(firstButton);
      
      const behaviouralLink = screen.getByText(/See examples: XDefiant onboarding/i);
      expect(behaviouralLink).toBeTruthy();
      expect(behaviouralLink.getAttribute('href')).toBe('/interventions/xdefiant-onboarding');
    });

    it('should track "See Example Click" events', () => {
      const trackSpy = vi.spyOn(analytics, 'track');
      render(<ServicesContent />);
      
      const spatialButton = screen.getByRole('button', {
        name: /3D or spatial environments impress/i,
      });
      
      fireEvent.click(spatialButton);
      
      const spatialLink = screen.getByText(/See examples: Atlas Obscura VR/i);
      fireEvent.click(spatialLink);
      
      expect(trackSpy).toHaveBeenCalledWith('See Example Click', {
        from: 'services',
        item: 'spatial',
      });
    });
  });

  describe('ServicesPage server component', () => {
    it('should render JSON-LD schemas', () => {
      const { container } = render(<ServicesPage />);
      
      const scripts = container.querySelectorAll('script[type="application/ld+json"]');
      expect(scripts.length).toBeGreaterThanOrEqual(2);
      
      const schemas = Array.from(scripts).map((script) =>
        JSON.parse(script.textContent || '{}')
      );
      
      const serviceSchema = schemas.find((s) => s['@type'] === 'Service');
      expect(serviceSchema).toBeTruthy();
      expect(serviceSchema?.name).toBe('SemiMassive Services');
      expect(serviceSchema?.serviceType).toContain('Behavioural Systems');
      
      const howToSchema = schemas.find((s) => s['@type'] === 'HowTo');
      expect(howToSchema).toBeTruthy();
      expect(howToSchema?.name).toContain('Diagnostic');
      expect(howToSchema?.step).toHaveLength(4);
    });
  });
});
