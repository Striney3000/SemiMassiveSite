import { z } from 'zod';

export const CaseStudyFrontmatter = z.object({
  title: z.string(),
  slug: z.string(),
  client: z.string().optional(),
  year: z.number().int().optional(),
  role: z.array(z.string()).default([]),
  summary: z.string(),
  impact: z.array(z.string()).default([]),
  pillars: z.array(z.string()).default([]),
  thumbnail: z.string().optional(),
  hero: z.string().optional(),
  readingTime: z.number().int().optional(),
  featured: z.boolean().default(false),
  schemaType: z.literal('CaseStudy').default('CaseStudy'),
  lastmod: z.string().optional(),
});

export type CaseStudyMeta = z.infer<typeof CaseStudyFrontmatter>;
