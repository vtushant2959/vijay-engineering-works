import { Section, Card, Badge, LinkButton, ArrowRight, Search, Bookmark, BookmarkFilled } from '../components/ui';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { products, categories, getCategoryCounts } from '../data/products';
import { useShortlist } from '../hooks/useShortlist';

export function ProductsPage() {
  const shortlist = useShortlist();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';
  const searchQuery = searchParams.get('q') || '';
  const counts = getCategoryCounts();

  const setCategory = (categoryId: string) => {
    const next = new URLSearchParams(searchParams);
    if (categoryId === 'all') {
      next.delete('category');
    } else {
      next.set('category', categoryId);
    }
    setSearchParams(next);
  };

  const setSearch = (value: string) => {
    const next = new URLSearchParams(searchParams);
    if (value) {
      next.set('q', value);
    } else {
      next.delete('q');
    }
    setSearchParams(next);
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.categoryId === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 pt-24 pb-16">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Our Products
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-8">
              Explore our comprehensive range of footwear machinery designed for
              efficiency, durability, and precision.
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 min-h-[44px] rounded-xl border border-secondary-200 text-secondary-900 placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <Section background="light">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="lg:sticky lg:top-24">
              <h3 className="font-heading font-semibold text-lg text-secondary-900 mb-4">
                Categories
              </h3>
              <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 lg:overflow-visible -mx-4 px-4 lg:mx-0 lg:px-0">
                <button
                  onClick={() => setCategory('all')}
                  className={`shrink-0 lg:w-full text-left px-4 py-2 min-h-[44px] rounded-lg transition-colors ${
                    activeCategory === 'all' ? 'bg-primary-600 text-white' : 'text-secondary-600 hover:bg-secondary-100'
                  }`}
                >
                  <span className="flex justify-between gap-3">
                    <span>All Products</span>
                    <span className={activeCategory === 'all' ? 'text-white/70' : 'text-secondary-400'}>{products.length}</span>
                  </span>
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setCategory(cat.id)}
                    className={`shrink-0 lg:w-full text-left px-4 py-2 min-h-[44px] rounded-lg transition-colors ${
                      activeCategory === cat.id
                        ? 'bg-primary-600 text-white'
                        : 'text-secondary-600 hover:bg-secondary-100'
                    }`}
                  >
                    <span className="flex justify-between gap-3">
                      <span className="whitespace-nowrap lg:whitespace-normal">{cat.name}</span>
                      <span className={activeCategory === cat.id ? 'text-white/70' : 'text-secondary-400'}>
                        {counts[cat.id] ?? 0}
                      </span>
                    </span>
                  </button>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 p-4 bg-primary-50 rounded-xl">
                <p className="font-semibold text-secondary-900 mb-2">Need Help?</p>
                <p className="text-sm text-secondary-600 mb-4">
                  Our experts can help you choose the right machinery.
                </p>
                <LinkButton href="/contact" variant="primary" size="small" className="w-full">
                  Get Expert Advice
                </LinkButton>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <p className="text-secondary-600 mb-6">
              Showing {filteredProducts.length} of {products.length} products
            </p>
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-secondary-600 mb-4">No products match your search.</p>
                <button
                  onClick={() => {
                    setCategory('all');
                    setSearch('');
                  }}
                  className="text-primary-600 font-semibold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card padding="none" hover className="group overflow-hidden h-full flex flex-col">
                      <div className="relative aspect-square overflow-hidden bg-secondary-50">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                          decoding="async"
                        />
                        {product.badge && (
                          <Badge variant="accent" className="absolute top-3 left-3">
                            {product.badge}
                          </Badge>
                        )}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            shortlist.toggle(product.slug);
                          }}
                          aria-label={shortlist.has(product.slug) ? `Remove ${product.name} from shortlist` : `Add ${product.name} to shortlist`}
                          aria-pressed={shortlist.has(product.slug)}
                          className={`absolute top-3 right-3 w-11 h-11 rounded-full flex items-center justify-center transition-colors ${
                            shortlist.has(product.slug)
                              ? 'bg-secondary-900 text-white'
                              : 'bg-white/90 text-secondary-700 hover:bg-white'
                          }`}
                        >
                          {shortlist.has(product.slug) ? <BookmarkFilled className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
                        </button>
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <p className="text-xs text-primary-600 font-semibold uppercase tracking-wide mb-1">
                          {categories.find((c) => c.id === product.categoryId)?.name}
                        </p>
                        <h3 className="font-heading font-semibold text-lg text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-secondary-600 text-sm mb-4 flex-1">
                          {product.shortDescription}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {product.features.slice(0, 3).map((feature) => (
                            <Badge key={feature} variant="primary" size="small">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        <Link
                          to={`/products/${product.slug}`}
                          className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:gap-3 transition-all min-h-[44px]"
                        >
                          View Details
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
