import { Section, SectionHeader, Card, LinkButton, Check, ArrowRight, ShieldCheck, Award, Users, Beaker } from '../components/ui';
import { motion } from 'framer-motion';
import { pick, factoryImages, machineryImages } from '../data/images';

const milestones = [
  { year: '1985', title: 'Foundation', desc: 'Vijay Engineering Works established in Delhi' },
  { year: '1995', title: 'First Export', desc: 'Started exporting to African markets' },
  { year: '2005', title: 'ISO Certification', desc: 'Achieved ISO 9001:2000 certification' },
  { year: '2010', title: 'New Facility', desc: 'Moved to larger 50,000 sq ft facility' },
  { year: '2018', title: 'Innovation Award', desc: 'Received Best Innovation in Manufacturing award' },
  { year: '2023', title: '500th Machine', desc: 'Delivered 500th machine milestone' },
];

const values = [
  { title: 'Quality First', desc: 'Every machine undergoes rigorous testing before delivery', icon: ShieldCheck },
  { title: 'Customer Focus', desc: 'We build long-term relationships, not just machines', icon: Users },
  { title: 'Innovation', desc: 'Continuous R&D for better, more efficient machinery', icon: Beaker },
  { title: 'Integrity', desc: 'Honest dealings and transparent business practices', icon: Award },
];

const certifications = [
  { title: 'ISO 9001:2015', desc: 'Certified quality management system across design, manufacturing, and service.' },
  { title: 'BIS Compliance Support', desc: 'Machinery and processes designed to help clients meet Indian Standards for safety footwear.' },
  { title: 'Export Recognition', desc: 'Recognized exporter serving clients across India, Africa, and Southeast Asia.' },
];

export function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 pt-24 pb-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-accent-500 text-secondary-900 rounded-full text-sm font-semibold mb-6">
              Since 1985
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Engineering Excellence for{' '}
              <span className="text-accent-400">Footwear Manufacturing</span>
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              For over three decades, Vijay Engineering Works has been pioneering
              footwear machinery solutions that power shoe factories across India and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <Section background="white" id="story">
        <div className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={pick(factoryImages, 3, 700)}
              alt="Vijay Engineering Works manufacturing facility"
              className="rounded-2xl shadow-medium w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              eyebrow="Our Story"
              title="From Humble Beginnings to Industry Leadership"
              align="left"
            />
            <p className="text-secondary-600 mb-6 leading-relaxed">
              Vijay Engineering Works began in 1985 as a small workshop in Delhi, founded by engineer
              Shri Vijay Kumar with a vision to provide quality machinery for India's growing footwear industry.
            </p>
            <p className="text-secondary-600 mb-6 leading-relaxed">
              Starting with basic shoe cutting machines, we expanded our product range based on customer
              feedback and industry needs. Today, we manufacture across 10 machine categories,
              serving clients across India, Africa, and Southeast Asia.
            </p>
            <p className="text-secondary-600 leading-relaxed">
              Our journey has been marked by continuous innovation, unwavering commitment to quality,
              and deep relationships with our customers. Many of our first clients still work with us,
              a testament to the trust we have built over the years.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Timeline */}
      <Section background="light" id="milestones">
        <SectionHeader
          eyebrow="Our Journey"
          title="Milestones Along the Way"
        />
        <div className="relative scroll-mt-28">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 -translate-x-1/2 hidden md:block" />
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-4 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 md:text-right">
                  <Card className={index % 2 === 0 ? 'md:text-right' : 'md:text-left'}>
                    <p className="text-accent-600 font-bold text-2xl mb-1">{milestone.year}</p>
                    <h3 className="font-heading font-semibold text-lg text-secondary-900 mb-1">
                      {milestone.title}
                    </h3>
                    <p className="text-secondary-600 text-sm">{milestone.desc}</p>
                  </Card>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center shrink-0 relative z-10">
                  <span className="text-white font-bold">{milestone.year.slice(2)}</span>
                </div>
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section background="white" id="values">
        <SectionHeader
          eyebrow="Our Values"
          title="What We Stand For"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-mt-28">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center h-full">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary-50 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-secondary-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-secondary-600 text-sm">{value.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section background="light" id="certifications">
        <SectionHeader
          eyebrow="Certifications & Standards"
          title="Recognized Quality"
        />
        <div className="grid md:grid-cols-3 gap-6 scroll-mt-28">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <ShieldCheck className="w-8 h-8 text-primary-600 mb-3" />
                <h3 className="font-heading font-semibold text-lg text-secondary-900 mb-2">{cert.title}</h3>
                <p className="text-secondary-600 text-sm">{cert.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Infrastructure CTA */}
      <Section background="primary" id="infrastructure">
        <div className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-28">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
              State-of-the-Art Manufacturing Facility
            </h2>
            <p className="text-primary-100 mb-6 leading-relaxed">
              Our 50,000 sq. ft. factory is equipped with modern CNC machines, precision tools,
              and a dedicated R&D lab. We follow strict quality control processes at every stage
              of manufacturing.
            </p>
            <ul className="space-y-3 mb-8">
              {['CNC Machining Centers', 'Quality Testing Lab', 'R&D Department', 'Training Center'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white">
                  <Check className="w-5 h-5 text-accent-400" />
                  {item}
                </li>
              ))}
            </ul>
            <LinkButton href="/contact" variant="accent" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Schedule Factory Visit
            </LinkButton>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={pick(machineryImages, 6, 500)}
              alt="CNC machining at our facility"
              className="rounded-2xl w-full aspect-square object-cover"
              loading="lazy"
            />
            <img
              src={pick(factoryImages, 4, 500)}
              alt="Factory floor"
              className="rounded-2xl w-full aspect-square object-cover mt-8"
              loading="lazy"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
