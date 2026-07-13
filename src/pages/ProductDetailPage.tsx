import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Section, SectionHeader, Card, Badge, LinkButton, ArrowRight, Phone, Check, Bookmark, BookmarkFilled } from '../components/ui';
import { motion } from 'framer-motion';
import { getProductBySlug, getRelatedProducts, categories } from '../data/products';
import { createProductJsonLd } from '../lib/structuredData';
import { useShortlist } from '../hooks/useShortlist';

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [activeImage, setActiveImage] = useState(0);
  const shortlist = useShortlist();

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const category = categories.find((c) => c.id === product.categoryId);
  const relatedProducts = getRelatedProducts(product, 4);
  const inShortlist = shortlist.has(product.slug);
  const jsonLd = createProductJsonLd({
    name: product.name,
    description: product.description,
    image: product.images[0],
    sku: product.slug,
    category: category?.name || product.categoryId,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 pt-24 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {product.badge && <Badge variant="accent" size="large">{product.badge}</Badge>}
            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mt-4 mb-4">
              {product.name}
            </h1>
            <p className="text-lg text-primary-100 max-w-3xl">
              {product.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Details */}
      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-secondary-100 mb-4">
              <img
                key={product.images[activeImage]}
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, i) => (
                  <button
                    key={image}
                    onClick={() => setActiveImage(i)}
                    aria-label={`Show image ${i + 1} of ${product.name}`}
                    aria-current={activeImage === i}
                    className={`aspect-square rounded-lg overflow-hidden bg-secondary-100 ring-2 transition-all ${
                      activeImage === i ? 'ring-primary-600' : 'ring-transparent hover:ring-primary-300'
                    }`}
                  >
                    <img src={image} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="primary" className="mb-4">{category?.name}</Badge>

            <h2 className="font-heading font-bold text-2xl text-secondary-900 mb-4">
              Key Features
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {product.features.map((feature) => (
                <div key={feature} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                  <span className="text-secondary-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Applications */}
            <h3 className="font-heading font-semibold text-lg text-secondary-900 mb-3">
              Suitable For
            </h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {product.applications.map((app) => (
                <Badge key={app} variant="primary">{app}</Badge>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <LinkButton href="tel:+919997290321" variant="primary" size="large" leftIcon={<Phone className="w-5 h-5" />}>
                Call for Price
              </LinkButton>
              <LinkButton href="/contact" variant="outline" size="large">
                Request Quote
              </LinkButton>
              <button
                onClick={() => shortlist.toggle(product.slug)}
                className={`inline-flex items-center justify-center gap-2 font-semibold rounded-xl px-6 py-3 min-h-[44px] border-2 transition-all ${
                  inShortlist
                    ? 'bg-secondary-900 text-white border-secondary-900'
                    : 'border-secondary-300 text-secondary-700 hover:border-secondary-900'
                }`}
                aria-pressed={inShortlist}
              >
                {inShortlist ? <BookmarkFilled className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
                {inShortlist ? 'Added to Shortlist' : 'Add to Shortlist'}
              </button>
            </div>

            {/* Brochure */}
            <div className="mt-8 p-4 bg-secondary-50 rounded-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-secondary-900">Need a spec sheet?</p>
                  <p className="text-sm text-secondary-600">We'll email the full datasheet for {product.name} within one business day.</p>
                </div>
                <LinkButton href="/contact" variant="secondary" size="small">
                  Request Datasheet
                </LinkButton>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Specifications */}
      <Section background="light">
        <SectionHeader
          eyebrow="Technical Specifications"
          title="Machine Details"
        />
        <div className="max-w-3xl mx-auto">
          <Card>
            <dl className="divide-y divide-secondary-100">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-3 gap-4">
                  <dt className="font-medium text-secondary-600">{key}</dt>
                  <dd className="font-semibold text-secondary-900 text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </Card>
        </div>
      </Section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <Section background="white">
          <SectionHeader
            eyebrow="Related Products"
            title="You May Also Need"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((related) => (
              <Card key={related.slug} padding="none" hover>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={related.images[0]}
                    alt={related.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-semibold text-secondary-900 mb-2">
                    {related.name}
                  </h3>
                  <Link
                    to={`/products/${related.slug}`}
                    className="text-primary-600 text-sm font-medium hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section background="gradient">
        <div className="text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">
            Ready to Upgrade Your Production?
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Contact our team for pricing, installation details, and customized solutions for your factory.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <LinkButton
              href="/contact"
              variant="accent"
              size="large"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Get Quote
            </LinkButton>
            <LinkButton
              href="https://wa.me/919997290321"
              variant="outline"
              size="large"
              className="!border-white/30 !text-white hover:!bg-white/10"
              external
            >
              WhatsApp Us
            </LinkButton>
          </div>
        </div>
      </Section>
    </>
  );
}
