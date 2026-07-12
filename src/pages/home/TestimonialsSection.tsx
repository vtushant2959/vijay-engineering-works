import { motion } from 'framer-motion';
import { Section, SectionHeader, TestimonialCard } from '../../components/ui';

const testimonials = [
  {
    quote: 'We installed Vijay Engineering sole press machines in our Jalandhar unit last year. The quality and efficiency have exceeded our expectations. Production output increased by 35%.',
    author: 'Rajesh Kumar',
    role: 'Production Manager',
    company: 'ABC Footwear Pvt Ltd',
    rating: 5,
  },
  {
    quote: 'Their turnkey project execution for our new safety shoe factory was flawless. From planning to commissioning, the team was professional and delivered on time.',
    author: 'Priya Sharma',
    role: 'Managing Director',
    company: 'SafeWalk Industries',
    rating: 5,
  },
  {
    quote: 'The after-sales support is exceptional. Any technical issues are resolved within hours. Their team understands the footwear industry inside out.',
    author: 'Mohammed Iqbal',
    role: 'Factory Owner',
    company: 'Leather Craft Industries',
    rating: 5,
  },
  {
    quote: 'We have been working with Vijay Engineering for 15 years. Their machines are reliable, energy-efficient, and built to last. Highly recommended for any shoe manufacturer.',
    author: 'Suresh Patel',
    role: 'CEO',
    company: 'Comfort Shoe Factory',
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <Section background="light">
      <SectionHeader
        eyebrow="Client Testimonials"
        title="Trusted by Leading Footwear Manufacturers"
        subtitle="Hear what our clients have to say about our products and services."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            <TestimonialCard className="h-full" {...testimonial} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
