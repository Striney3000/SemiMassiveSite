import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Header } from '@/components/Header';

vi.mock('next/navigation', () => ({
  usePathname: () => '/matrix',
}));

vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }: any) => <img src={src} alt={alt} {...props} />,
}));

describe('Header Navigation', () => {
  it('renders Matrix link in navigation', () => {
    render(<Header />);
    const matrixLink = screen.getByRole('link', { name: 'Matrix' });
    expect(matrixLink).toBeTruthy();
    expect(matrixLink.getAttribute('href')).toBe('/matrix');
  });

  it('Matrix link appears between Services and About', () => {
    render(<Header />);
    const navLinks = screen.getAllByRole('link');
    const linkTexts = navLinks.map(link => link.textContent);
    
    const servicesIndex = linkTexts.indexOf('Services');
    const matrixIndex = linkTexts.indexOf('Matrix');
    const aboutIndex = linkTexts.indexOf('About');
    
    expect(matrixIndex).toBeGreaterThan(servicesIndex);
    expect(aboutIndex).toBeGreaterThan(matrixIndex);
  });

  it('sets aria-current="page" when on Matrix route', () => {
    render(<Header />);
    const matrixLink = screen.getByRole('link', { name: 'Matrix' });
    expect(matrixLink.getAttribute('aria-current')).toBe('page');
  });

  it('all nav links meet 44px touch target requirement', () => {
    const { container } = render(<Header />);
    const navLinks = container.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
      const styles = window.getComputedStyle(link);
      const minHeight = parseInt(styles.minHeight);
      expect(minHeight).toBeGreaterThanOrEqual(44);
    });
  });
});
