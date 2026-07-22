import { productPhoto } from './images';

export interface Industry {
  slug: string;
  name: string;
  description: string;
  image: string;
  features: string[];
}

export const industries: Industry[] = [
  {
    slug: 'shoe-manufacturers',
    name: 'Shoe Manufacturers',
    description: 'High-performance machinery for athletic and casual footwear with precision lasting, sole bonding, and finishing capabilities.',
    image: productPhoto(27),
    features: ['Precise sole bonding', 'Lasting accuracy', 'High-volume production', 'Quality finishing'],
  },
  {
    slug: 'safety-shoe-manufacturers',
    name: 'Safety Footwear',
    description: 'Specialized equipment for steel-toe boots, work boots, and industrial safety shoes meeting IS/ISI standards.',
    image: productPhoto(23),
    features: ['Heavy-duty pressing', 'Consistent shape setting', 'Certified processes', 'Durable construction'],
  },
  {
    slug: 'leather-industries',
    name: 'Leather Footwear',
    description: 'Premium machinery for high-end leather shoes with fine detailing, precision cutting, and hand-finish quality.',
    image: productPhoto(18),
    features: ['Precision cutting', 'Fine lasting', 'Polish finishing', 'Hand-craft support'],
  },
  {
    slug: 'export-houses',
    name: 'Export Houses',
    description: 'International-standard machinery for factories supplying global brands, with documentation and QA support built in.',
    image: productPhoto(15),
    features: ['Quality standards', 'Documentation support', 'Testing equipment', 'Brand compliance'],
  },
  {
    slug: 'msme-startups',
    name: 'MSMEs & Startups',
    description: 'Compact, cost-effective machinery lines for growing units and new manufacturers entering the footwear industry.',
    image: productPhoto(6),
    features: ['Lower entry investment', 'Compact footprints', 'Scalable line design', 'Training included'],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}
