import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Footer } from '@/components/Footer';

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

vi.mock('@/lib/analytics', () => ({
  track: vi.fn(),
  trackFirstCta: vi.fn(),
}));

describe('Footer Navigation', () => {
  it('renders Matrix link in footer', () => {
    render(<Footer />);
    const matrixLink = screen.getByRole('link', { name: 'Matrix' });
    expect(matrixLink).toBeTruthy();
    expect(matrixLink.getAttribute('href')).toBe('/matrix');
  });

  it('Matrix link appears in primary nav group', () => {
    render(<Footer />);
    const navLinks = screen.getAllByRole('link');
    const linkTexts = navLinks.map(link => link.textContent);
    
    expect(linkTexts).toContain('Matrix');
    expect(linkTexts).toContain('Home');
    expect(linkTexts).toContain('Services');
    expect(linkTexts).toContain('Solutions');
    expect(linkTexts).toContain('About');
  });

  it('Matrix link has proper hover styles', () => {
    const { container } = render(<Footer />);
    const matrixLink = screen.getByRole('link', { name: 'Matrix' });
    expect(matrixLink.className).toContain('hover:text-text-100');
  });
});
