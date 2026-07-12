import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Section, SectionHeader, Accordion, AccordionItem } from '../../components/ui';
import { flatFaqs } from '../../data/faqs';

export function FAQSection() {
  const faqs = flatFaqs.slice(0, 6);

  return (
    <Section background="white">
      <SectionHeader
        eyebrow="Frequently Asked Questions"
        title="Your Questions Answered"
        subtitle="Here are some common questions our customers ask about our machinery and services."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <Accordion>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} id={`home-faq-${index}`} title={faq.question}>
              <p className="leading-relaxed">{faq.answer}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>

      <p className="text-center mt-8">
        Still have questions?{' '}
        <Link to="/contact" className="text-primary-600 font-semibold hover:underline">
          Contact our team
        </Link>{' '}
        or visit our{' '}
        <Link to="/faqs" className="text-primary-600 font-semibold hover:underline">
          full FAQ page
        </Link>.
      </p>
    </Section>
  );
}
