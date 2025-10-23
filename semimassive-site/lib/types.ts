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
  schemaType: z.enum(['Intervention', 'CaseStudy', 'HowTo', 'TechArticle']).default('Intervention'),
  lastmod: z.string().optional(),
  problem: z.string().optional(),
  intervention: z.string().optional(),
  result: z.string().optional(),
  howtoSteps: z.array(z.string()).optional(),
});

export type CaseStudyMeta = z.infer<typeof CaseStudyFrontmatter>;
