import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Section, SectionHeader, LinkButton, ArrowRight } from '../../components/ui';
import { industries } from '../../data/industries';

const MotionLink = motion.create(Link);

export function IndustriesSection() {
  return (
    <Section background="white">
      <SectionHeader
        eyebrow="Industries We Serve"
        title="Solutions for Every Footwear Segment"
        subtitle="Our machinery serves diverse segments of the footwear industry, from artisanal workshops to large-scale factories."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((industry, index) => (
          <MotionLink
            key={industry.slug}
            to={`/industries/${industry.slug}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
          >
            <img
              src={industry.image}
              alt={industry.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/95 via-secondary-900/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-heading font-semibold text-white text-lg mb-2 group-hover:text-accent-400 transition-colors">
                {industry.name}
              </h3>
              <p className="text-secondary-200 text-sm lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                {industry.description}
              </p>
            </div>
          </MotionLink>
        ))}
      </div>

      <div className="text-center mt-12">
        <LinkButton href="/industries" variant="outline" size="large" rightIcon={<ArrowRight className="w-5 h-5" />}>
          View All Industries
        </LinkButton>
      </div>
    </Section>
  );
}
