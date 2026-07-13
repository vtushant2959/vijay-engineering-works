export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Vijay Engineering Works',
  url: 'https://vijayengineeringworks.com',
  logo: 'https://vijayengineeringworks.com/icon-512.png',
  description: 'Leading manufacturer of footwear machinery and shoe making machines in India since 1985.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'H. No. A6-490, Kamla Nagar, Block A, Hariparwat Ward, Opp. Navjyoti Building',
    addressLocality: 'Agra',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-99972-90321',
    contactType: 'sales',
    availableLanguage: ['Hindi', 'English'],
  },
  sameAs: [
    'https://facebook.com/vijayengineeringworks',
    'https://linkedin.com/company/vijay-engineering-works',
    'https://twitter.com/vijayengworks',
    'https://youtube.com/vijayengineeringworks',
  ],
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Vijay Engineering Works',
  url: 'https://vijayengineeringworks.com',
};

export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://vijayengineeringworks.com',
  name: 'Vijay Engineering Works',
  image: 'https://vijayengineeringworks.com/icon-512.png',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'H. No. A6-490, Kamla Nagar, Block A, Hariparwat Ward, Opp. Navjyoti Building',
    addressLocality: 'Agra',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 27.1767,
    longitude: 78.0081,
  },
  telephone: '+91-99972-90321',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '18:00',
  },
};

interface ProductJsonLdProps {
  name: string;
  description: string;
  image: string;
  sku: string;
  category: string;
}

export function createProductJsonLd({ name, description, image, sku, category }: ProductJsonLdProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    sku,
    category,
    brand: {
      '@type': 'Brand',
      name: 'Vijay Engineering Works',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Vijay Engineering Works',
    },
  };
}

interface ArticleJsonLdProps {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  author: string;
}

export function createArticleJsonLd({ headline, description, image, datePublished, author }: ArticleJsonLdProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image,
    datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vijay Engineering Works',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vijayengineeringworks.com/icon-512.png',
      },
    },
  };
}

interface BreadcrumbJsonLdProps {
  items: { label: string; href?: string }[];
}

export function createBreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `https://vijayengineeringworks.com${item.href}` : undefined,
    })),
  };
}
