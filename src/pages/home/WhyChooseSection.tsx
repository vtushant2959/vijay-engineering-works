import { motion } from 'framer-motion';
import { Section, SectionHeader, Card, ShieldCheck, LightBulb, Cog, Truck, Beaker, Award } from '../../components/ui';

const reasons = [
  {
    title: 'Industry Expertise',
    description: 'Over three decades of specialized experience in footwear machinery manufacturing, understanding the unique needs of shoe manufacturers.',
    icon: Award,
  },
  {
    title: 'Quality Assurance',
    description: 'ISO 9001:2015 certified processes ensure every machine meets international quality standards with rigorous testing protocols.',
    icon: ShieldCheck,
  },
  {
    title: 'Innovation Driven',
    description: 'Dedicated R&D team continuously improves machine efficiency, reducing energy consumption and increasing productivity.',
    icon: LightBulb,
  },
  {
    title: 'After-Sales Support',
    description: 'Comprehensive maintenance programs, 24/7 technical support, and readily available spare parts across India.',
    icon: Cog,
  },
  {
    title: 'Turnkey Solutions',
    description: 'From factory planning to machine installation and operator training, we provide end-to-end solutions for new units.',
    icon: Truck,
  },
  {
    title: 'Custom Engineering',
    description: 'Specialized machinery designed to meet your unique production requirements and space constraints.',
    icon: Beaker,
  },
];

export function WhyChooseSection() {
  return (
    <Section background="gradient">
      <SectionHeader
        theme="dark"
        eyebrow="Why Choose Us"
        title="Your Trusted Partner in Footwear Manufacturing"
        subtitle="We go beyond just selling machines. We partner with you to build successful manufacturing operations."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20">
              <div className="w-14 h-14 rounded-2xl bg-accent-500 flex items-center justify-center mb-4">
                <reason.icon className="w-7 h-7 text-secondary-900" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-primary-100 leading-relaxed">
                {reason.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
