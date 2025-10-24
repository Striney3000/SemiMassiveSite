export const defaultSeo = {
  titleTemplate: '%s | SemiMassive',
  defaultTitle: 'SemiMassive — Future Product Co-Dev',
  description:
    'We ship the next generation of product experiences before the market catches up.',
  openGraph: {
    type: 'website',
    siteName: 'SemiMassive',
    url: process.env.NEXT_PUBLIC_SITE_URL,
  },
  twitter: { cardType: 'summary_large_image' },
  additionalLinkTags: [{ rel: 'icon', href: '/favicon.ico' }],
};

export const orgJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SemiMassive',
  url: process.env.NEXT_PUBLIC_SITE_URL,
  sameAs: ['https://www.linkedin.com/in/nickstrine'],
  logo: `${process.env.NEXT_PUBLIC_SITE_URL}/og.png`,
});

export const breadcrumbJsonLd = (items: { name: string; item: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: it.name,
    item: it.item,
  })),
});

export const creativeWorkJsonLd = (p: {
  name: string;
  description: string;
  url: string;
  dateModified?: string;
  image?: string;
  authorName?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: p.name,
  description: p.description,
  url: p.url,
  image: p.image,
  dateModified: p.dateModified,
  author: p.authorName ? { '@type': 'Person', name: p.authorName } : undefined,
});

export const howToJsonLd = (p: {
  name: string;
  description: string;
  url: string;
  image?: string;
  steps: string[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: p.name,
  description: p.description,
  image: p.image,
  step: p.steps.map((s, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: s.length > 80 ? s.slice(0, 80) + '…' : s,
    text: s,
  })),
  url: p.url,
});

export const techArticleJsonLd = (p: {
  name: string;
  description: string;
  url: string;
  dateModified?: string;
  image?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: p.name,
  description: p.description,
  dateModified: p.dateModified,
  image: p.image,
  url: p.url,
});

export function interventionJsonLdRouter(p: {
  schemaType?: 'Intervention' | 'CaseStudy' | 'HowTo' | 'TechArticle';
  name: string;
  description: string;
  url: string;
  dateModified?: string;
  image?: string;
  steps?: string[];
  authorName?: string;
}) {
  if (p.schemaType === 'HowTo' && p.steps?.length) {
    return howToJsonLd({
      name: p.name,
      description: p.description,
      url: p.url,
      image: p.image,
      steps: p.steps,
    });
  }
  if (p.schemaType === 'TechArticle') {
    return techArticleJsonLd({
      name: p.name,
      description: p.description,
      url: p.url,
      dateModified: p.dateModified,
      image: p.image,
    });
  }
  return creativeWorkJsonLd({
    name: p.name,
    description: p.description,
    url: p.url,
    dateModified: p.dateModified,
    image: p.image,
    authorName: p.authorName,
  });
}

export const personJsonLd = (p: {
  name: string;
  jobTitle?: string;
  url?: string;
  sameAs?: string[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: p.name,
  jobTitle: p.jobTitle,
  url: p.url,
  sameAs: p.sameAs,
});
