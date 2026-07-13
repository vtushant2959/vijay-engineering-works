import { Section, Accordion, AccordionItem, LinkButton, ArrowRight } from '../components/ui';
import { motion } from 'framer-motion';
import { faqCategories } from '../data/faqs';

export function FAQPage() {
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Find answers to common questions about our machinery, services, and support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <Section background="light">
        <div className="max-w-4xl mx-auto space-y-12">
          {faqCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <h2 className="font-heading font-bold text-2xl text-secondary-900 mb-6">
                {category.category}
              </h2>
              <Accordion>
                {category.faqs.map((faq, index) => (
                  <AccordionItem key={index} id={`${category.category}-${index}`} title={faq.question}>
                    <p className="leading-relaxed">{faq.answer}</p>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Still Have Questions */}
      <Section background="gradient">
        <div className="text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Our team is ready to help. Reach out and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <LinkButton href="/contact" variant="accent" size="large" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Contact Us
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
