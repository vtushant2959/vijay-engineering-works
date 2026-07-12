import { Section, Card, Badge, LinkButton, Calendar, ArrowRight } from '../components/ui';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { blogPosts, blogCategories } from '../data/blog';
import { NewsletterForm } from '../components/layout/NewsletterForm';

export function BlogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'All';

  const setCategory = (category: string) => {
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const filteredPosts = activeCategory === 'All' ? blogPosts : blogPosts.filter((p) => p.category === activeCategory);
  const [featured, ...rest] = filteredPosts.length ? filteredPosts : blogPosts;

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
              Blog & Articles
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Industry insights, technical guides, and expert tips for
              footwear manufacturers and entrepreneurs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <Section background="light">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {blogCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 min-h-[44px] rounded-full text-sm font-medium transition-colors ${
                cat === activeCategory
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-secondary-600 hover:bg-primary-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card padding="none" className="overflow-hidden">
              <div className="grid md:grid-cols-2 h-full">
                <div className="aspect-video md:aspect-auto">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge variant="accent" className="mb-4">{featured.category}</Badge>
                  <h2 className="font-heading font-bold text-2xl text-secondary-900 mb-3">
                    {featured.title}
                  </h2>
                  <p className="text-secondary-600 mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-secondary-500 mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featured.date}
                    </span>
                    <span>{featured.readTime}</span>
                  </div>
                  <LinkButton href={`/blog/${featured.slug}`} variant="primary">
                    Read Article
                  </LinkButton>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Other Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card padding="none" hover className="group overflow-hidden h-full flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <Badge variant="primary" className="mb-3">{post.category}</Badge>
                  <h3 className="font-heading font-semibold text-lg text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-secondary-600 text-sm mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-secondary-500">{post.date}</span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-primary-600 font-semibold text-sm hover:underline min-h-[44px] flex items-center"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="white">
        <div className="text-center bg-secondary-50 rounded-2xl p-8 md:p-12">
          <h2 className="font-heading font-bold text-2xl text-secondary-900 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-secondary-600 mb-6 max-w-md mx-auto">
            Get the latest articles, industry updates, and machine tips delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterForm
              inputClassName="flex-1 px-4 py-3 min-h-[44px] border border-secondary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
              buttonClassName="px-6 py-3 min-h-[44px] bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-50 flex items-center gap-2 justify-center"
              icon={<>Subscribe <ArrowRight className="w-4 h-4" /></>}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
