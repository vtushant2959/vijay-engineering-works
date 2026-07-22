import { Section, SectionHeader, Card, LinkButton, ArrowRight, Truck, Cog, Wrench, Users, ShieldCheck, Check, BuildingFactory2 } from '../components/ui';
import { motion } from 'framer-motion';
import { productPhoto } from '../data/images';

const services = [
  {
    id: 'factory-setup-solutions',
    title: 'Factory Setup Solutions',
    description: 'Complete planning and consultancy for new footwear manufacturing units including layout design, machinery selection, and process optimization.',
    icon: BuildingFactory2,
    features: ['Factory Layout Planning', 'Machinery Selection', 'Process Design', 'Cost Estimation'],
    image: productPhoto(15),
  },
  {
    id: 'turnkey-projects',
    title: 'Turnkey Projects',
    description: 'End-to-end project execution from planning to commissioning, delivering ready-to-operate manufacturing facilities.',
    icon: Truck,
    features: ['Complete Setup', 'Single Point Contact', 'Timeline Delivery', 'Documentation'],
    image: productPhoto(27),
  },
  {
    id: 'installation-services',
    title: 'Installation Services',
    description: 'Professional machine installation, calibration, and commissioning by trained technicians with full support.',
    icon: Cog,
    features: ['Expert Installation', 'Calibration', 'Testing', 'Certification'],
    image: productPhoto(19),
  },
  {
    id: 'maintenance-programs',
    title: 'Maintenance Programs',
    description: 'Preventive and breakdown maintenance services with genuine spare parts and factory-trained technicians.',
    icon: Wrench,
    features: ['Preventive Maintenance', 'AMC Packages', 'Spare Parts', 'Quick Response'],
    image: productPhoto(24),
  },
  {
    id: 'operator-training',
    title: 'Operator Training',
    description: 'Comprehensive training programs for machine operators covering operation, maintenance, and safety.',
    icon: Users,
    features: ['Hands-on Training', 'Safety Protocols', 'Operation Manuals', 'Certification'],
    image: productPhoto(11),
  },
  {
    id: 'technical-support',
    title: 'Technical Support',
    description: '24/7 technical support for troubleshooting, optimization, and performance improvement.',
    icon: ShieldCheck,
    features: ['Phone Support', 'Video Support', 'On-site Visits', 'Remote Monitoring'],
    image: productPhoto(1),
  },
];

export function ServicesPage() {
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
              Our Services
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Beyond machinery, we provide comprehensive services to ensure your
              production success from day one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <Section background="light">
        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`scroll-mt-28 grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl shadow-medium w-full aspect-[4/3] object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <Card className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-heading font-semibold text-2xl text-secondary-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-secondary-600 mb-6">{service.description}</p>
                <ul className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-secondary-700">
                      <Check className="w-4 h-4 text-primary-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <LinkButton href="/contact" variant="primary">
                  Learn More
                </LinkButton>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section background="white" id="process">
        <SectionHeader
          eyebrow="How We Work"
          title="Our Service Process"
        />
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Consultation', desc: 'Understand your needs and requirements' },
            { step: '02', title: 'Planning', desc: 'Design solutions and create roadmap' },
            { step: '03', title: 'Execution', desc: 'Implementation with regular updates' },
            { step: '04', title: 'Support', desc: 'Ongoing maintenance and assistance' },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-6xl font-heading font-bold text-primary-100 mb-2">{item.step}</div>
              <h3 className="font-heading font-semibold text-lg text-secondary-900 mb-2">{item.title}</h3>
              <p className="text-secondary-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <div className="text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Contact us today to discuss your requirements and get a customized quote.
          </p>
          <LinkButton
            href="/contact"
            variant="accent"
            size="large"
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            Contact Us
          </LinkButton>
        </div>
      </Section>
    </>
  );
}
