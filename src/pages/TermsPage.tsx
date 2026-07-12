import { Section, Card } from '../components/ui';
import { motion } from 'framer-motion';

export function TermsPage() {
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
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto">
              Last updated: January 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <Section background="white">
        <Card className="max-w-4xl mx-auto">
          <div className="prose-custom text-secondary-700 space-y-6">
            <h2 className="font-heading font-semibold text-2xl text-secondary-900">Acceptance of Terms</h2>
            <p>
              By accessing this website and engaging in business with Vijay Engineering Works, you agree to
              these terms of service. If you do not agree with any part, please do not use our services.
            </p>

            <h2 className="font-heading font-semibold text-2xl text-secondary-900">Products & Services</h2>
            <p>
              Product descriptions, specifications, and prices are subject to change without notice. Images
              are for illustrative purposes and actual products may vary. Contact us for current specifications
              and pricing.
            </p>

            <h2 className="font-heading font-semibold text-2xl text-secondary-900">Orders & Payment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Orders are confirmed upon receipt of advance payment (unless other terms are agreed)</li>
              <li>Payment terms: Typically 50% advance, 50% before dispatch</li>
              <li>We accept bank transfers, cheques, and approved credit terms</li>
              <li>Delivery timelines are estimates and subject to production schedules</li>
            </ul>

            <h2 className="font-heading font-semibold text-2xl text-secondary-900">Warranty</h2>
            <p>
              All machinery is covered by our standard 18-month warranty from installation date. The warranty
              covers manufacturing defects under normal use conditions. It does not cover:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Damage from misuse, negligence, or accidents</li>
              <li>Normal wear and tear</li>
              <li>Use of non-genuine spare parts</li>
              <li>Unauthorized modifications or repairs</li>
            </ul>

            <h2 className="font-heading font-semibold text-2xl text-secondary-900">Installation & Training</h2>
            <p>
              Installation and training are provided as per agreed terms. Client is responsible for site
              preparation, electrical connections, compressed air supply, and operator availability.
            </p>

            <h2 className="font-heading font-semibold text-2xl text-secondary-900">Limitation of Liability</h2>
            <p>
              Vijay Engineering Works shall not be liable for indirect, incidental, or consequential damages
              arising from use of our products. Our liability is limited to the purchase price of the product.
            </p>

            <h2 className="font-heading font-semibold text-2xl text-secondary-900">Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes shall be subject to the exclusive
              jurisdiction of courts in Delhi.
            </p>

            <h2 className="font-heading font-semibold text-2xl text-secondary-900">Contact</h2>
            <p>
              For questions about these terms, contact us at:
              <br />
              Email: legal@vijayengineeringworks.com
              <br />
              Phone: +91 98765 43210
            </p>
          </div>
        </Card>
      </Section>
    </>
  );
}
