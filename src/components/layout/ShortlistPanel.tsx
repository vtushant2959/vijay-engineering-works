import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Modal, Button, Trash, ArrowRight } from '../ui';
import { useShortlist } from '../../hooks/useShortlist';
import { getProductBySlug } from '../../data/products';

interface ShortlistPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShortlistPanel({ isOpen, onClose }: ShortlistPanelProps) {
  const shortlist = useShortlist();
  const navigate = useNavigate();
  const items = shortlist.slugs.map((slug) => getProductBySlug(slug)).filter(Boolean);

  const handleRequestQuote = () => {
    onClose();
    navigate(`/contact?products=${shortlist.slugs.join(',')}`);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Your Shortlist" size="default">
      {items.length === 0 ? (
        <p className="text-secondary-600 text-sm py-6 text-center">
          No products shortlisted yet. Browse the <button className="text-primary-600 font-medium hover:underline" onClick={() => { onClose(); navigate('/products'); }}>product catalog</button> and tap "Add to Shortlist" on anything you'd like a combined quote for.
        </p>
      ) : (
        <>
          <ul className="space-y-3 max-h-[50vh] overflow-y-auto -mx-2 px-2">
            {items.map((product) => (
              <motion.li
                key={product!.slug}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-3 p-2 rounded-xl border border-secondary-100"
              >
                <img src={product!.images[0]} alt={product!.name} className="w-14 h-14 rounded-lg object-cover shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-secondary-900 text-sm truncate">{product!.name}</p>
                </div>
                <button
                  onClick={() => shortlist.remove(product!.slug)}
                  aria-label={`Remove ${product!.name} from shortlist`}
                  className="w-11 h-11 shrink-0 flex items-center justify-center rounded-lg text-secondary-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                >
                  <Trash className="w-5 h-5" />
                </button>
              </motion.li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button variant="primary" className="flex-1" onClick={handleRequestQuote} rightIcon={<ArrowRight className="w-4 h-4" />}>
              Request Quote for {items.length} Item{items.length > 1 ? 's' : ''}
            </Button>
            <Button variant="ghost" onClick={shortlist.clear}>
              Clear All
            </Button>
          </div>
        </>
      )}
    </Modal>
  );
}

export function ShortlistTriggerBadge() {
  const shortlist = useShortlist();
  if (shortlist.slugs.length === 0) return null;
  return (
    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-accent-500 text-secondary-900 text-xs font-bold flex items-center justify-center">
      {shortlist.slugs.length}
    </span>
  );
}
