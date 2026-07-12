import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Section, Card, LinkButton, ArrowRight, Check, Users, BuildingFactory2, ShieldCheck, Globe } from '../components/ui';
import { motion } from 'framer-motion';
import { industries } from '../data/industries';

export function IndustriesPage() {
  const { slug } = useParams<{ slug?: string }>();

  useEffect(() => {
    if (!slug) return;
    const timeout = window.setTimeout(() => {
      document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
    return () => window.clearTimeout(timeout);
  }, [slug]);

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
              Industries We Serve
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Our machinery solutions serve diverse segments of the footwear industry,
              from artisanal workshops to large-scale factories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <Section background="light">
        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.slug}
              id={industry.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`scroll-mt-28 rounded-2xl transition-shadow ${slug === industry.slug ? 'ring-2 ring-primary-500' : ''}`}
            >
              <Card padding="none" className="overflow-hidden">
                <div className="grid md:grid-cols-2 h-full">
                  <div className="aspect-[4/3] md:aspect-auto">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-6 flex flex-col">
                    <h3 className="font-heading font-semibold text-xl text-secondary-900 mb-3">
                      {industry.name}
                    </h3>
                    <p className="text-secondary-600 mb-4 flex-1">
                      {industry.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {industry.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-secondary-700">
                          <Check className="w-4 h-4 text-primary-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <LinkButton href="/contact" variant="outline" size="small">
                      Get Solutions
                    </LinkButton>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section background="white">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { value: '200+', label: 'Clients', icon: Users },
            { value: '50+', label: 'Industries', icon: BuildingFactory2 },
            { value: '15+', label: 'Countries', icon: Globe },
            { value: 'ISO', label: 'Certified', icon: ShieldCheck },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-50 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-primary-600" />
              </div>
              <p className="font-heading font-bold text-3xl text-primary-600 mb-1">{stat.value}</p>
              <p className="text-secondary-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <div className="text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">
            Need Industry-Specific Solutions?
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Let our experts understand your production needs and recommend the right machinery mix.
          </p>
          <LinkButton
            href="/contact"
            variant="accent"
            size="large"
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            Consult Our Experts
          </LinkButton>
        </div>
      </Section>
    </>
  );
}
