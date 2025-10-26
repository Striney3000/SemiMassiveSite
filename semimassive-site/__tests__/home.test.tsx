import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MatrixLink } from '@/components/MatrixLink';

vi.mock('@/lib/analytics', () => ({
  track: vi.fn(),
}));

describe('Homepage Matrix Link', () => {
  it('renders "See the Neural Matrix →" link', () => {
    render(<MatrixLink />);
    const link = screen.getByRole('link', { name: /See the Neural Matrix/i });
    expect(link).toBeTruthy();
    expect(link.textContent).toContain('See the Neural Matrix →');
  });

  it('links to /matrix', () => {
    render(<MatrixLink />);
    const link = screen.getByRole('link');
    expect(link.getAttribute('href')).toBe('/matrix');
  });

  it('has proper focus styles', () => {
    const { container } = render(<MatrixLink />);
    const link = container.querySelector('a');
    expect(link?.className).toContain('focus-visible:outline');
  });

  it('meets 44px touch target requirement', () => {
    const { container } = render(<MatrixLink />);
    const link = container.querySelector('a');
    const styles = window.getComputedStyle(link!);
    const minHeight = parseInt(styles.minHeight);
    expect(minHeight).toBeGreaterThanOrEqual(44);
  });
});
