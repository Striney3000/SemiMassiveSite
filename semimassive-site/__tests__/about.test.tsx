import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '@/app/about/page';

describe('About Page', () => {
  it('renders mission headline', () => {
    render(<About />);
    expect(
      screen.getByRole('heading', {
        name: /We help companies evolve from legacy UX to emergent interaction models/i,
      })
    ).toBeInTheDocument();
  });
});
