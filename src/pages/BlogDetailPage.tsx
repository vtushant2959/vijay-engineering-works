import { Link, Navigate, useParams } from 'react-router-dom';
import { Section, Card, Badge, LinkButton, Calendar } from '../components/ui';
import { motion } from 'framer-motion';
import { getPostBySlug, getRelatedPosts } from '../data/blog';
import { createArticleJsonLd } from '../lib/structuredData';

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post, 3);
  const jsonLd = createArticleJsonLd({
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: post.author,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 pt-24 pb-12">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge variant="accent" className="mb-4">{post.category}</Badge>
            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-4 text-primary-100">
              <span>{post.author}</span>
              <span className="w-1 h-1 rounded-full bg-primary-400" />
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="w-1 h-1 rounded-full bg-primary-400" />
              <span>{post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article */}
      <Section background="white">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12 max-w-5xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose-custom"
          >
            <div className="aspect-video rounded-2xl overflow-hidden mb-8">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="eager" decoding="async" />
            </div>
            <div
              className="text-secondary-700 leading-relaxed [&>h2]:font-heading [&>h2]:font-semibold [&>h2]:text-2xl [&>h2]:text-secondary-900 [&>h2]:mt-10 [&>h2]:mb-4 [&>p]:mb-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&_a]:text-primary-600 [&_a]:font-medium [&_a]:hover:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.article>

          <aside className="space-y-8">
            {/* Author Card */}
            <Card>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-semibold shrink-0">
                  {post.author.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-secondary-900">{post.author}</p>
                  <p className="text-sm text-secondary-600">{post.authorRole}</p>
                </div>
              </div>
              <p className="text-sm text-secondary-600">
                Part of the Vijay Engineering Works team, sharing practical guidance from the footwear manufacturing floor.
              </p>
            </Card>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
              <Card>
                <h3 className="font-heading font-semibold text-lg text-secondary-900 mb-4">
                  Related Articles
                </h3>
                <ul className="space-y-4">
                  {relatedPosts.map((related) => (
                    <li key={related.slug}>
                      <Link
                        to={`/blog/${related.slug}`}
                        className="text-secondary-600 hover:text-primary-600 transition-colors text-sm"
                      >
                        {related.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {/* CTA */}
            <Card className="bg-primary-50 border-primary-100">
              <h3 className="font-heading font-semibold text-lg text-secondary-900 mb-2">
                Need Machinery?
              </h3>
              <p className="text-sm text-secondary-600 mb-4">
                Contact us for complete factory setup solutions.
              </p>
              <LinkButton href="/contact" variant="primary" size="small" className="w-full">
                Get Quote
              </LinkButton>
            </Card>
          </aside>
        </div>
      </Section>
    </>
  );
}
