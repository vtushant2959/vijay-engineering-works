import { motion } from 'framer-motion';
import { Section, SectionHeader, LinkButton, ArrowRight, Check } from '../../components/ui';
import { productPhoto } from '../../data/images';

const features = [
  { label: 'Premium Materials', desc: 'High-grade steel and components' },
  { label: 'Energy Efficient', desc: 'Up to 40% power savings' },
  { label: 'Low Maintenance', desc: 'Minimal downtime, maximum output' },
  { label: 'Expert Support', desc: '24/7 technical assistance' },
];

export function AboutSection() {
  return (
    <Section background="white">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Images */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                <img
                  src={productPhoto(17)}
                  alt="Twin-Head Lasting Machine built by Vijay Engineering Works"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square bg-primary-600 flex items-center justify-center text-white p-6">
                <div className="text-center">
                  <p className="font-heading font-bold text-4xl mb-1">35+</p>
                  <p className="text-primary-200 text-sm">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden aspect-square bg-accent-500 flex items-center justify-center p-6">
                <div className="text-center">
                  <p className="font-heading font-bold text-4xl mb-1 text-secondary-900">200+</p>
                  <p className="text-secondary-700 text-sm">Happy Clients</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                <img
                  src={productPhoto(31)}
                  alt="Hydraulic Clicker Cutting Press built by Vijay Engineering Works"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeader
            eyebrow="About Vijay Engineering Works"
            title="Engineering Excellence for Footwear Manufacturing"
            align="left"
          />

          <p className="text-secondary-600 mb-8 leading-relaxed">
            Founded in 1985, Vijay Engineering Works has been at the forefront of footwear machinery
            manufacturing in India. We combine traditional craftsmanship with modern technology to
            deliver machines that meet international quality standards.
          </p>

          <p className="text-secondary-600 mb-8 leading-relaxed">
            Our state-of-the-art manufacturing facility spans over 50,000 sq. ft., equipped with
            precision CNC machines and a dedicated R&D team. We serve clients across India,
            Africa, and Southeast Asia with complete turnkey solutions for shoe manufacturing units.
          </p>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {features.map((item) => (
              <div key={item.label} className="flex items-start gap-3 p-4 rounded-xl bg-secondary-50">
                <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-secondary-900">{item.label}</p>
                  <p className="text-sm text-secondary-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <LinkButton href="/about" variant="primary" rightIcon={<ArrowRight className="w-5 h-5" />}>
            Learn More About Us
          </LinkButton>
        </motion.div>
      </div>
    </Section>
  );
}
