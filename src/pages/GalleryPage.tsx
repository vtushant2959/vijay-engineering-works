import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Section, Modal, LinkButton, ArrowRight, ChevronLeft, ChevronRight } from '../components/ui';
import { galleryItems, galleryCategories, type GalleryItem } from '../data/gallery';

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof galleryCategories)[number]>('All');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filteredItems = useMemo<GalleryItem[]>(
    () => (activeCategory === 'All' ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)),
    [activeCategory]
  );

  const activeItem = activeIndex !== null ? filteredItems[activeIndex] : null;

  const showNext = () => setActiveIndex((i) => (i === null ? null : (i + 1) % filteredItems.length));
  const showPrev = () => setActiveIndex((i) => (i === null ? null : (i - 1 + filteredItems.length) % filteredItems.length));

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, filteredItems.length]);

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
              Gallery
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              A look at our machinery, factory floor, and the craftsmanship behind every build.
            </p>
          </motion.div>
        </div>
      </section>

      <Section background="light">
        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setActiveIndex(null);
              }}
              className={`px-4 py-2 min-h-[44px] rounded-full text-sm font-medium transition-colors ${
                cat === activeCategory ? 'bg-primary-600 text-white' : 'bg-white text-secondary-600 hover:bg-primary-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 8) * 0.05 }}
              className="group relative aspect-square rounded-xl overflow-hidden bg-secondary-100"
              aria-label={`Open ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end p-3 opacity-0 group-hover:opacity-100">
                <span className="text-white text-xs font-medium">{item.category}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </Section>

      {/* Lightbox */}
      <Modal
        isOpen={activeItem !== null}
        onClose={() => setActiveIndex(null)}
        size="full"
        showCloseButton
      >
        {activeItem && (
          <div className="-m-6">
            <div className="relative bg-black">
              <img src={activeItem.image} alt={activeItem.title} className="w-full max-h-[75vh] object-contain" />
              <button
                onClick={showPrev}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 text-secondary-900 flex items-center justify-center hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={showNext}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 text-secondary-900 flex items-center justify-center hover:bg-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            <p className="p-4 text-sm text-secondary-600">{activeItem.category}</p>
          </div>
        )}
      </Modal>

      {/* CTA */}
      <Section background="gradient">
        <div className="text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">
            Want to See These Machines in Action?
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Schedule a factory visit or ask for a live demo at your facility.
          </p>
          <LinkButton href="/contact" variant="accent" size="large" rightIcon={<ArrowRight className="w-5 h-5" />}>
            Get in Touch
          </LinkButton>
        </div>
      </Section>
    </>
  );
}
