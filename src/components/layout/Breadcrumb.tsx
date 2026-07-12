import { Link } from 'react-router-dom';
import { ChevronRight } from '../ui';
import { createBreadcrumbJsonLd } from '../../lib/structuredData';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const jsonLd = createBreadcrumbJsonLd({ items });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" className="bg-secondary-50 border-b border-secondary-100">
        <div className="container-custom py-3">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link to="/" className="text-secondary-500 hover:text-primary-600 transition-colors">
                Home
              </Link>
            </li>
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-secondary-400" />
                {item.href ? (
                  <Link
                    to={item.href}
                    className="text-secondary-500 hover:text-primary-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-secondary-700 font-medium">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
