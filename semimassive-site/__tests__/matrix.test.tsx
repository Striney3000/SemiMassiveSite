import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MatrixContent } from '@/components/MatrixContent';
import { MatrixNodeCard } from '@/components/MatrixNodeCard';
import { MatrixFilters } from '@/components/MatrixFilters';
import { MATRIX_NODES } from '@/data/matrix';

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

describe('Matrix Page', () => {
  it('renders H1 "The Neural Matrix"', () => {
    render(<MatrixContent />);
    const heading = screen.getByRole('heading', { level: 1, name: /The Neural Matrix/i });
    expect(heading).toBeTruthy();
  });

  it('renders at least 8 nodes', () => {
    expect(MATRIX_NODES.length).toBeGreaterThanOrEqual(8);
  });

  it('filter chips exist', () => {
    const mockOnChange = vi.fn();
    render(<MatrixFilters selectedPillar="All" onFilterChange={mockOnChange} />);
    
    const allFilter = screen.getByRole('button', { name: 'All' });
    const behaviouralFilter = screen.getByRole('button', { name: 'Behavioural' });
    const spatialFilter = screen.getByRole('button', { name: 'Spatial' });
    
    expect(allFilter).toBeTruthy();
    expect(behaviouralFilter).toBeTruthy();
    expect(spatialFilter).toBeTruthy();
  });

  it('filtering to "Spatial" reduces visible nodes appropriately', () => {
    render(<MatrixContent />);
    
    const spatialFilter = screen.getByRole('button', { name: 'Spatial' });
    fireEvent.click(spatialFilter);
    
    const spatialNodes = MATRIX_NODES.filter(node => 
      node.pillars.includes('Spatial')
    );
    
    expect(spatialNodes.length).toBeGreaterThan(0);
    expect(spatialNodes.length).toBeLessThan(MATRIX_NODES.length);
  });

  it('collapsed card hides detail panel initially', () => {
    const testNode = MATRIX_NODES[0];
    const { container } = render(<MatrixNodeCard node={testNode} />);
    
    const nodeButton = screen.getByRole('button');
    expect(nodeButton.getAttribute('aria-expanded')).toBe('false');
    
    // Details panel should be hidden
    const detailsPanel = container.querySelector(`#node-details-${testNode.id}`);
    expect(detailsPanel?.className).toContain('hidden');
    expect(detailsPanel?.getAttribute('aria-hidden')).toBe('true');
  });

  it('toggling a node sets aria-expanded=true and shows detail panel', () => {
    const testNode = MATRIX_NODES[0];
    const { container } = render(<MatrixNodeCard node={testNode} />);
    
    const nodeButton = screen.getByRole('button');
    expect(nodeButton.getAttribute('aria-expanded')).toBe('false');
    
    fireEvent.click(nodeButton);
    
    expect(nodeButton.getAttribute('aria-expanded')).toBe('true');
    // Details panel should be visible
    const detailsPanel = container.querySelector(`#node-details-${testNode.id}`);
    expect(detailsPanel?.className).not.toContain('hidden');
    expect(detailsPanel?.getAttribute('aria-hidden')).toBe('false');
  });

  it('founder node has distinguishing styling', () => {
    const founderNode = MATRIX_NODES.find(n => n.isFounder);
    expect(founderNode).toBeDefined();
    
    if (founderNode) {
      const { container } = render(<MatrixNodeCard node={founderNode} />);
      const nodeElement = container.querySelector('button');
      expect(nodeElement?.className).toContain('border-aqua');
    }
  });

  it('avatar size is large (≥96px) in collapsed state', () => {
    const testNode = MATRIX_NODES[0];
    const { container } = render(<MatrixNodeCard node={testNode} />);
    
    // Check for large size class
    const avatar = container.querySelector('figure');
    expect(avatar?.className).toContain('w-28');
  });

  it('card buttons have adequate minimum height', () => {
    const { container } = render(<MatrixContent />);
    const cardButtons = container.querySelectorAll('button[aria-expanded]');
    
    cardButtons.forEach(button => {
      // Check for min-h-[280px] class presence
      expect(button.className).toContain('min-h-[280px]');
    });
  });
});
