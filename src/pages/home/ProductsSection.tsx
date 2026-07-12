import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Section, SectionHeader, Card, LinkButton, ArrowRight } from '../../components/ui';
import { getCategoryCounts, categories as productCategories } from '../../data/products';
import { pick, machineryImages } from '../../data/images';

const featuredCategoryIds = [
  'shoe-making-machines',
  'sole-press-machines',
  'hydraulic-press-machines',
  'shoe-cutting-machines',
  'stitching-machines',
  'conveyor-systems',
];

export function ProductsSection() {
  const counts = getCategoryCounts();
  const categories = featuredCategoryIds.map((id, index) => {
    const category = productCategories.find((c) => c.id === id)!;
    return {
      title: category.name,
      description: category.description,
      image: pick(machineryImages, index + 20, 500),
      count: counts[id] ?? 0,
      href: `/products?category=${id}`,
    };
  });

  return (
    <Section background="light">
      <SectionHeader
        eyebrow="Our Products"
        title="Complete Footwear Machinery Solutions"
        subtitle="From individual machines to complete production lines, we offer everything you need for efficient shoe manufacturing."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card padding="none" hover className="group overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary-600">
                  {category.count} Products
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-secondary-600 text-sm mb-4">{category.description}</p>
                <Link
                  to={category.href}
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:gap-3 transition-all"
                >
                  Explore Category
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <LinkButton href="/products" variant="primary" size="large" rightIcon={<ArrowRight className="w-5 h-5" />}>
          View All Products
        </LinkButton>
      </div>
    </Section>
  );
}
