import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { WhatsApp, Phone, Envelope, ChevronUp, BookmarkFilled } from '../ui';
import { useState, useEffect } from 'react';
import { useShortlist } from '../../hooks/useShortlist';
import { ShortlistPanel, ShortlistTriggerBadge } from './ShortlistPanel';

export function FloatingCTA() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isShortlistOpen, setIsShortlistOpen] = useState(false);
  const shortlist = useShortlist();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed bottom-6 right-6 z-40 flex flex-col gap-3"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      {/* Scroll to Top */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={handleScrollTop}
          className="w-12 h-12 rounded-full bg-secondary-700 text-white shadow-medium flex items-center justify-center hover:bg-secondary-800 transition-colors"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      )}

      {/* Shortlist */}
      {shortlist.slugs.length > 0 && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => setIsShortlistOpen(true)}
          className="relative w-14 h-14 rounded-full bg-secondary-900 text-white shadow-strong flex items-center justify-center hover:bg-secondary-800 transition-colors"
          aria-label={`View shortlist (${shortlist.slugs.length} items)`}
        >
          <BookmarkFilled className="w-6 h-6" />
          <ShortlistTriggerBadge />
        </motion.button>
      )}

      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20machinery."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
        className="w-14 h-14 rounded-full bg-green-500 text-white shadow-strong flex items-center justify-center hover:bg-green-600 transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <WhatsApp className="w-7 h-7" />
      </motion.a>

      {/* Call Now */}
      <motion.a
        href="tel:+919876543210"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.7, type: 'spring' }}
        className="w-14 h-14 rounded-full bg-primary-600 text-white shadow-strong flex items-center justify-center hover:bg-primary-700 transition-colors"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </motion.a>

      {/* Quick Enquiry */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.9, type: 'spring' }}
      >
        <Link
          to="/contact"
          className="w-14 h-14 rounded-full bg-accent-500 text-secondary-900 shadow-strong flex items-center justify-center hover:bg-accent-600 transition-colors"
          aria-label="Send enquiry"
        >
          <Envelope className="w-6 h-6" />
        </Link>
      </motion.div>

      <ShortlistPanel isOpen={isShortlistOpen} onClose={() => setIsShortlistOpen(false)} />
    </div>
  );
}
