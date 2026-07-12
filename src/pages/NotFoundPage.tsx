import { motion } from 'framer-motion';
import { LinkButton, ArrowRight } from '../components/ui';

export function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-16 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="text-[200px] font-heading font-bold text-white/10 leading-none"
        >
          404
        </motion.div>
        <div className="relative -mt-32">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-primary-100 mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <LinkButton href="/" variant="accent" size="large" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Back to Home
            </LinkButton>
            <LinkButton href="/products" variant="outline" size="large" className="!border-white/30 !text-white hover:!bg-white/10">
              Browse Products
            </LinkButton>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
