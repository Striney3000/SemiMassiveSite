import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import { CaseStudyFrontmatter, type CaseStudyMeta } from './types';

const WORK_DIR = path.join(process.cwd(), 'content', 'work');

export async function getAllWork(): Promise<CaseStudyMeta[]> {
  try {
    const files = await fs.readdir(WORK_DIR);
    const mdxFiles = files.filter((file) => file.endsWith('.mdx'));

    const allWork = await Promise.all(
      mdxFiles.map(async (file) => {
        const filePath = path.join(WORK_DIR, file);
        const fileContent = await fs.readFile(filePath, 'utf8');
        const { data } = matter(fileContent);

        const validatedData = CaseStudyFrontmatter.parse(data);
        return validatedData;
      })
    );

    return allWork.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return (b.year || 0) - (a.year || 0);
    });
  } catch (error) {
    console.error('Error loading work:', error);
    return [];
  }
}

export async function getWorkBySlug(
  slug: string
): Promise<{ meta: CaseStudyMeta; content: string } | null> {
  try {
    const filePath = path.join(WORK_DIR, `${slug}.mdx`);
    const fileContent = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    const validatedData = CaseStudyFrontmatter.parse(data);

    return {
      meta: validatedData,
      content,
    };
  } catch (error) {
    console.error(`Error loading work by slug "${slug}":`, error);
    return null;
  }
}

export async function compileMdx(content: string, components = {}) {
  const { content: compiledContent } = await compileMDX({
    source: content,
    components,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'wrap',
              properties: {
                className: ['anchor-link'],
              },
            },
          ],
          [
            rehypePrettyCode,
            {
              theme: 'github-dark',
              keepBackground: false,
            },
          ],
        ],
      },
    },
  });

  return compiledContent;
}
