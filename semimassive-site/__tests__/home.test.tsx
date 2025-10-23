import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Home from '@/app/page';

test('renders hero headline', () => {
  render(<Home />);
  expect(
    screen.getByText(/We ship the next generation of product experiences/i)
  ).toBeInTheDocument();
});
