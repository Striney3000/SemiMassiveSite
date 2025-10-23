import Link from 'next/link';

interface RelatedSolution {
  slug: string;
  title: string;
  pillars: string[];
}

interface SeeAlsoProps {
  related: RelatedSolution[];
}

export function SeeAlso({ related }: SeeAlsoProps) {
  if (!related || related.length === 0) {
    return null;
  }

  return (
    <aside className="mt-16 pt-8 border-t border-base-800">
      <h2 className="text-xl font-heading font-semibold text-text-100 mb-6">
        See also
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {related.map((item) => (
          <Link
            key={item.slug}
            href={`/interventions/${item.slug}`}
            className="group block p-4 bg-base-900 border border-base-800 rounded-lg no-underline transition-all duration-soft hover:border-aqua-400 hover:shadow-lg hover:shadow-aqua-400/10"
          >
            <h3 className="text-base font-medium text-text-100 group-hover:text-aqua-400 transition-colors mb-2">
              {item.title}
            </h3>
            {item.pillars && item.pillars.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {item.pillars.slice(0, 3).map((pillar) => (
                  <span
                    key={pillar}
                    className="px-2 py-1 text-xs bg-base-800 text-text-300 rounded-full"
                  >
                    {pillar}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </aside>
  );
}
