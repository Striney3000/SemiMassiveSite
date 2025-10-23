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
