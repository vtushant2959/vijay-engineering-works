import { motion } from 'framer-motion';
import { LinkButton, ArrowRight, Play, Check } from '../../components/ui';
import { pick, factoryImages } from '../../data/images';

export function HeroSection() {
  const highlights = [
    '35+ Years of Excellence',
    'ISO 9001:2015 Certified',
    '500+ Machines Delivered',
    'Pan-India Presence',
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-accent-500 text-secondary-900 rounded-full text-sm font-semibold mb-6">
              Trusted by 200+ Footwear Manufacturers
            </span>

            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              India's Leading{' '}
              <span className="text-accent-400">Footwear Machinery</span>{' '}
              Manufacturer
            </h1>

            <p className="text-xl text-primary-100 mb-8 max-w-xl">
              Empowering shoe manufacturers with cutting-edge machinery for over three decades.
              From sole pressing to complete production lines, we deliver excellence.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4 mb-10">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 text-white/90"
                >
                  <Check className="w-5 h-5 text-accent-400" />
                  <span className="text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <LinkButton href="/products" variant="accent" size="large" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Explore Products
              </LinkButton>
              <LinkButton href="/contact" variant="outline" size="large" className="!border-white/30 !text-white hover:!bg-white/10">
                Get Free Consultation
              </LinkButton>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-primary-600/30 backdrop-blur-sm border border-white/10">
              <img
                src={pick(factoryImages, 5, 800)}
                alt="Industrial footwear machinery in manufacturing facility"
                className="w-full h-full object-cover opacity-80"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-strong p-6"
            >
              <p className="text-sm text-secondary-600 mb-1">Machines Operating Globally</p>
              <p className="font-heading font-bold text-3xl text-primary-600">500+</p>
            </motion.div>

            {/* Video Play Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <button
                className="w-20 h-20 rounded-full bg-accent-500 text-secondary-900 flex items-center justify-center shadow-strong hover:scale-110 transition-transform"
                aria-label="Play company video"
              >
                <Play className="w-8 h-8 ml-1" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
