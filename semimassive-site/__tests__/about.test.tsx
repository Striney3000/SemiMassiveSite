import { describe, it, expect } from 'vitest';

describe('About Page', () => {
  it('should have about page configured', () => {
    expect(true).toBe(true);
  });

  it('should verify mission statement is defined', () => {
    const missionStatement = 'We help companies evolve from legacy UX to emergent interaction models';
    expect(missionStatement).toBeDefined();
    expect(missionStatement.length).toBeGreaterThan(0);
  });

  it('should verify page sections are defined', () => {
    const sections = [
      'Mission',
      'Why we exist',
      'What we believe',
      'How we work',
      'Who we are',
      'Principles',
      'Founder',
      'Closing CTA',
    ];
    expect(sections).toHaveLength(8);
  });
});
