import { Section, Card } from '../components/ui';
import { motion } from 'framer-motion';

export function PrivacyPolicyPage() {
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
              Privacy Policy
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
            <h2 className="font-heading font-semibold text-2xl text-secondary-900">Introduction</h2>
            <p>
              Vijay Engineering Works respects your privacy and is committed to protecting your personal data.
              This privacy policy explains how we collect, use, and safeguard your information when you visit
              our website or do business with us.
            </p>

            <h2 className="font-heading font-semibold text-2xl text-secondary-900">Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact information: name, email address, phone number</li>
              <li>Business information: company name, address, industry</li>
              <li>Enquiry details: product interest, requirements, messages</li>
              <li>Technical data: IP address, browser type, device information</li>
            </ul>

            <h2 className="font-heading font-semibold text-2xl text-secondary-900">How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your enquiries and provide quotations</li>
              <li>Process orders and deliver products</li>
              <li>Provide technical support and maintenance services</li>
              <li>Send relevant product updates and promotional materials</li>
              <li>Improve our website and services</li>
            </ul>

            <h2 className="font-heading font-semibold text-2xl text-secondary-900">Data Protection</h2>
            <p>
              We implement appropriate security measures to protect your data against unauthorized access,
              alteration, disclosure, or destruction. Access to personal data is restricted to authorized
              personnel only.
            </p>

            <h2 className="font-heading font-semibold text-2xl text-secondary-900">Third-Party Sharing</h2>
            <p>
              We do not sell or rent your personal information to third parties. We may share your data with
              partners who assist us in operations (delivery partners, payment providers) under strict
              confidentiality agreements.
            </p>

            <h2 className="font-heading font-semibold text-2xl text-secondary-900">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2 className="font-heading font-semibold text-2xl text-secondary-900">Contact Us</h2>
            <p>
              For any questions regarding this privacy policy, please contact us at:
              <br />
              Email: Vijayengineeringworks786@yahoo.com
              <br />
              Phone: +91 99972 90321
            </p>
          </div>
        </Card>
      </Section>
    </>
  );
}
