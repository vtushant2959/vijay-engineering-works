import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LinkButton, Menu, X, ChevronDown, Phone, Envelope } from '../ui';
import { LogoMark } from './LogoMark';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Shoe Making Machines', href: '/products?category=shoe-making-machines' },
      { label: 'Sole Press Machines', href: '/products?category=sole-press-machines' },
      { label: 'Hydraulic Press Machines', href: '/products?category=hydraulic-press-machines' },
      { label: 'Shoe Cutting Machines', href: '/products?category=shoe-cutting-machines' },
      { label: 'Stitching Machines', href: '/products?category=stitching-machines' },
      { label: 'Toe Lasting Machines', href: '/products?category=toe-lasting-machines' },
      { label: 'Heel Lasting Machines', href: '/products?category=heel-lasting-machines' },
      { label: 'Sanding Machines', href: '/products?category=sanding-machines' },
      { label: 'Polishing Machines', href: '/products?category=polishing-machines' },
      { label: 'Conveyor Systems', href: '/products?category=conveyor-systems' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'Shoe Manufacturers', href: '/industries/shoe-manufacturers' },
      { label: 'Leather Industries', href: '/industries/leather-industries' },
      { label: 'Safety Shoe Manufacturers', href: '/industries/safety-shoe-manufacturers' },
      { label: 'Export Houses', href: '/industries/export-houses' },
      { label: 'MSMEs & Startups', href: '/industries/msme-startups' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Factory Setup Solutions', href: '/services#factory-setup-solutions' },
      { label: 'Turnkey Projects', href: '/services#turnkey-projects' },
      { label: 'Installation Services', href: '/services#installation-services' },
      { label: 'Maintenance Programs', href: '/services#maintenance-programs' },
      { label: 'Operator Training', href: '/services#operator-training' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close menus whenever the route changes (covers both taps on links and browser back/forward).
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Close an open dropdown on outside click/tap and on Escape.
  useEffect(() => {
    if (!activeDropdown) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveDropdown(null);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeDropdown]);

  return (
    <>
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md transition-shadow duration-300
        ${isScrolled ? 'shadow-soft' : 'shadow-sm'}
      `}
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      {/* Top Bar */}
      <div className="bg-primary-700 text-white text-sm hidden lg:block">
        <div className="container-custom py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+919997290321" className="flex items-center gap-2 hover:text-accent-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 99972 90321</span>
            </a>
            <a href="mailto:Vijayengineeringworks786@yahoo.com" className="flex items-center gap-2 hover:text-accent-300 transition-colors">
              <Envelope className="w-4 h-4" />
              <span>Vijayengineeringworks786@yahoo.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <LinkButton href="/dealership" size="small" variant="accent" className="!py-1 !px-3 !text-xs !min-h-0">
              Become a Dealer
            </LinkButton>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container-custom" ref={navRef}>
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <LogoMark className="w-10 h-10 lg:w-12 lg:h-12" />
            <div className="hidden sm:block">
              <p className="font-heading font-bold text-lg text-secondary-900 leading-tight">
                Vijay Engineering
              </p>
              <p className="text-xs text-secondary-500 -mt-0.5">Works</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div key={item.label} className="relative">
                <div className="flex items-center rounded-lg font-medium text-secondary-700 transition-colors hover:text-primary-600 hover:bg-primary-50">
                  <Link to={item.href} className="pl-4 pr-1 py-2">
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === item.label}
                      aria-label={`${activeDropdown === item.label ? 'Close' : 'Open'} ${item.label} menu`}
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      className="pr-3 pl-1 py-2 min-h-[44px] flex items-center"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>

                {/* Dropdown */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="bg-white rounded-2xl shadow-strong border border-secondary-100 p-4 min-w-[240px]">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="block px-4 py-2 text-secondary-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                          <div className="border-t border-secondary-100 mt-3 pt-3">
                            <Link
                              to={item.href}
                              className="block px-4 py-2 text-primary-600 font-medium hover:bg-primary-50 rounded-lg transition-colors"
                            >
                              View All {item.label}
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <LinkButton href="/contact" variant="outline" size="small">
              Get Quote
            </LinkButton>
            <LinkButton href="tel:+919997290321" variant="primary" size="small" leftIcon={<Phone className="w-4 h-4" />}>
              Call Now
            </LinkButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 min-w-[44px] min-h-[44px] rounded-lg text-secondary-700 hover:bg-secondary-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </header>

    {/* Mobile Menu — portaled to <body> so it's never clipped by the header's
        own backdrop-blur, which otherwise creates a containing block that
        confines this fixed-position overlay to the header's own height. */}
    {createPortal(
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-xl overflow-y-auto"
              style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}
            >
              <div className="p-4 border-b border-secondary-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <LogoMark className="w-10 h-10" />
                  <span className="font-heading font-bold text-secondary-900">Menu</span>
                </div>
                <button
                  className="p-2 min-w-[44px] min-h-[44px] rounded-lg text-secondary-500 hover:bg-secondary-100 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="p-4">
                {navigation.map((item) => (
                  <MobileNavItem
                    key={item.label}
                    item={item}
                    onClose={() => setIsMobileMenuOpen(false)}
                  />
                ))}
              </nav>

              <div className="p-4 border-t border-secondary-100 space-y-3">
                <LinkButton href="/contact" variant="primary" className="w-full">
                  Get a Quote
                </LinkButton>
                <LinkButton href="tel:+919997290321" variant="outline" className="w-full" leftIcon={<Phone className="w-4 h-4" />}>
                  Call +91 99972 90321
                </LinkButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    )}
    </>
  );
}

function MobileNavItem({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="flex items-center justify-between py-1 border-b border-secondary-100"
      >
        <Link
          to={item.href}
          onClick={onClose}
          className="font-medium text-secondary-900 py-3 flex-1 min-h-[44px] flex items-center"
        >
          {item.label}
        </Link>
        {item.children && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${item.label} submenu`}
            className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded text-secondary-500 hover:bg-secondary-100 transition-colors"
          >
            <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        )}
      </div>
      {item.children && isOpen && (
        <div className="ml-4 border-l-2 border-primary-200 pl-4 mt-1">
          {item.children.map((child) => (
            <Link
              key={child.href}
              to={child.href}
              onClick={onClose}
              className="py-2 min-h-[44px] flex items-center text-secondary-600 hover:text-primary-600 transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
