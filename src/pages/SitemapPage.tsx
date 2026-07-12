import { Link } from 'react-router-dom';
import { Section } from '../components/ui';
import { categories } from '../data/products';
import { industries } from '../data/industries';

const sections: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Main',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Products', href: '/products' },
      { label: 'Industries', href: '/industries' },
      { label: 'Services', href: '/services' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Product Categories',
    links: categories.map((c) => ({ label: c.name, href: `/products?category=${c.id}` })),
  },
  {
    title: 'Industries',
    links: industries.map((i) => ({ label: i.name, href: `/industries/${i.slug}` })),
  },
  {
    title: 'Company',
    links: [
      { label: 'Careers', href: '/careers' },
      { label: 'Dealership', href: '/dealership' },
      { label: 'FAQs', href: '/faqs' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
];

export function SitemapPage() {
  return (
    <Section background="white">
      <h1 className="font-heading font-bold text-3xl text-secondary-900 mb-10">Sitemap</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="font-heading font-semibold text-lg text-secondary-900 mb-4">{section.title}</h2>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-secondary-600 hover:text-primary-600 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
