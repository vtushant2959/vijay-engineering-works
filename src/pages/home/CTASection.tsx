import { motion } from 'framer-motion';
import { Section, LinkButton, ArrowRight, Phone, Envelope, MapPin } from '../../components/ui';

export function CTASection() {
  return (
    <Section background="gradient" padding="large">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6"
        >
          Ready to Start Your Footwear Manufacturing Journey?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-primary-100 mb-10"
        >
          Whether you're setting up a new unit or upgrading existing machinery, our experts are here to help you choose the right solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <LinkButton
            href="/contact"
            variant="accent"
            size="large"
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            Get Free Consultation
          </LinkButton>
          <LinkButton
            href="tel:+919876543210"
            variant="outline"
            size="large"
            className="!border-white/30 !text-white hover:!bg-white/10"
            leftIcon={<Phone className="w-5 h-5" />}
          >
            +91 98765 43210
          </LinkButton>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 text-sm text-primary-200"
        >
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>24/7 Support Available</span>
          </div>
          <div className="flex items-center gap-2">
            <Envelope className="w-4 h-4" />
            <span>info@vijayengineeringworks.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Delhi NCR, India</span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
