import { Link } from 'react-router-dom';
import { Facebook, LinkedIn, Twitter, YouTube, Instagram, MapPin, Phone, Envelope, Clock, ArrowRight } from '../ui';
import { NewsletterForm } from './NewsletterForm';
import { LogoMark } from './LogoMark';
import { categories as productCategories } from '../../data/products';

const footerLinks = {
  products: [
    ...productCategories.slice(0, 5).map((category) => ({
      label: category.name,
      href: `/products?category=${category.id}`,
    })),
    { label: 'View All Products', href: '/products' },
  ],
  services: [
    { label: 'Factory Setup Solutions', href: '/services#factory-setup-solutions' },
    { label: 'Turnkey Projects', href: '/services#turnkey-projects' },
    { label: 'Installation Services', href: '/services#installation-services' },
    { label: 'Maintenance Programs', href: '/services#maintenance-programs' },
    { label: 'Operator Training', href: '/services#operator-training' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Story', href: '/about#story' },
    { label: 'Infrastructure', href: '/about#infrastructure' },
    { label: 'Certifications', href: '/about#certifications' },
    { label: 'Careers', href: '/careers' },
    { label: 'Dealership', href: '/dealership' },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Sitemap', href: '/sitemap' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/vijayengineeringworks', label: 'Facebook' },
  { icon: LinkedIn, href: 'https://linkedin.com/company/vijay-engineering-works', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/vijayengworks', label: 'Twitter' },
  { icon: YouTube, href: 'https://youtube.com/vijayengineeringworks', label: 'YouTube' },
  { icon: Instagram, href: 'https://instagram.com/vijayengineeringworks', label: 'Instagram' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-secondary-300">
      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <LogoMark className="w-12 h-12" withBackground />
              <div>
                <p className="font-heading font-bold text-lg text-white">Vijay Engineering Works</p>
                <p className="text-xs text-secondary-400">Industrial Excellence Since 1985</p>
              </div>
            </div>
            <p className="text-secondary-400 mb-6 max-w-md">
              Leading manufacturer of footwear machinery in India. We specialize in providing complete
              solutions for shoe manufacturing units, from individual machines to complete production lines.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <a href="https://maps.google.com/?q=H.+No.+A6-490,+Kamla+Nagar,+Block+A,+Hariparwat+Ward,+Agra,+Uttar+Pradesh" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-white transition-colors">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-primary-400" />
                <span>H. No. A6-490, Kamla Nagar, Block A, Hariparwat Ward, Opp. Navjyoti Building, Agra, Uttar Pradesh</span>
              </a>
              <a href="tel:+919997290321" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-5 h-5 shrink-0 text-primary-400" />
                <span>+91 99972 90321</span>
              </a>
              <a href="mailto:Vijayengineeringworks786@yahoo.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Envelope className="w-5 h-5 shrink-0 text-primary-400" />
                <span>Vijayengineeringworks786@yahoo.com</span>
              </a>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 shrink-0 text-primary-400" />
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="hover:text-primary-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Company */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm mb-8">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="hover:text-primary-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-heading font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="hover:text-primary-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm mb-8">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="hover:text-primary-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <h4 className="font-heading font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-sm text-secondary-400 mb-3">
              Get latest updates on machinery and offers.
            </p>
            <NewsletterForm
              inputClassName="flex-1 px-4 py-2 bg-secondary-800 border border-secondary-700 rounded-lg text-white placeholder:text-secondary-500 focus:outline-none focus:border-primary-500 text-sm"
              buttonClassName="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 min-w-[44px] min-h-[44px] flex items-center justify-center"
              icon={<ArrowRight className="w-5 h-5" />}
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-500">
            &copy; {currentYear} Vijay Engineering Works. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="text-sm text-secondary-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-secondary-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-sm text-secondary-500 hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary-800 flex items-center justify-center text-secondary-400 hover:bg-primary-600 hover:text-white transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
