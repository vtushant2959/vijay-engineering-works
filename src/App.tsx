import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout, ScrollManager } from './components/layout';
import './index.css';

const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const ProductsPage = lazy(() => import('./pages/ProductsPage').then((m) => ({ default: m.ProductsPage })));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage').then((m) => ({ default: m.ProductDetailPage })));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage').then((m) => ({ default: m.IndustriesPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage })));
const GalleryPage = lazy(() => import('./pages/GalleryPage').then((m) => ({ default: m.GalleryPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then((m) => ({ default: m.BlogPage })));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage').then((m) => ({ default: m.BlogDetailPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const CareersPage = lazy(() => import('./pages/CareersPage').then((m) => ({ default: m.CareersPage })));
const DealershipPage = lazy(() => import('./pages/DealershipPage').then((m) => ({ default: m.DealershipPage })));
const FAQPage = lazy(() => import('./pages/FAQPage').then((m) => ({ default: m.FAQPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then((m) => ({ default: m.PrivacyPolicyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then((m) => ({ default: m.TermsPage })));
const SitemapPage = lazy(() => import('./pages/SitemapPage').then((m) => ({ default: m.SitemapPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <span className="spinner" role="status" aria-label="Loading" />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/about" element={<Layout showBreadcrumb breadcrumbItems={[{ label: 'About Us' }]}><AboutPage /></Layout>} />
          <Route path="/products" element={<Layout showBreadcrumb breadcrumbItems={[{ label: 'Products' }]}><ProductsPage /></Layout>} />
          <Route path="/products/:slug" element={<Layout showBreadcrumb breadcrumbItems={[{ label: 'Products', href: '/products' }, { label: 'Product' }]}><ProductDetailPage /></Layout>} />
          <Route path="/industries" element={<Layout showBreadcrumb breadcrumbItems={[{ label: 'Industries' }]}><IndustriesPage /></Layout>} />
          <Route path="/industries/:slug" element={<Layout showBreadcrumb breadcrumbItems={[{ label: 'Industries', href: '/industries' }, { label: 'Industry' }]}><IndustriesPage /></Layout>} />
          <Route path="/services" element={<Layout showBreadcrumb breadcrumbItems={[{ label: 'Services' }]}><ServicesPage /></Layout>} />
          <Route path="/gallery" element={<Layout showBreadcrumb breadcrumbItems={[{ label: 'Gallery' }]}><GalleryPage /></Layout>} />
          <Route path="/blog" element={<Layout showBreadcrumb breadcrumbItems={[{ label: 'Blog' }]}><BlogPage /></Layout>} />
          <Route path="/blog/:slug" element={<Layout showBreadcrumb breadcrumbItems={[{ label: 'Blog', href: '/blog' }, { label: 'Article' }]}><BlogDetailPage /></Layout>} />
          <Route path="/contact" element={<Layout showBreadcrumb breadcrumbItems={[{ label: 'Contact' }]}><ContactPage /></Layout>} />
          <Route path="/careers" element={<Layout showBreadcrumb breadcrumbItems={[{ label: 'Careers' }]}><CareersPage /></Layout>} />
          <Route path="/dealership" element={<Layout showBreadcrumb breadcrumbItems={[{ label: 'Dealership' }]}><DealershipPage /></Layout>} />
          <Route path="/faqs" element={<Layout showBreadcrumb breadcrumbItems={[{ label: 'FAQs' }]}><FAQPage /></Layout>} />
          <Route path="/privacy-policy" element={<Layout breadcrumbItems={[{ label: 'Privacy Policy' }]}><PrivacyPolicyPage /></Layout>} />
          <Route path="/terms" element={<Layout breadcrumbItems={[{ label: 'Terms of Service' }]}><TermsPage /></Layout>} />
          <Route path="/sitemap" element={<Layout showBreadcrumb breadcrumbItems={[{ label: 'Sitemap' }]}><SitemapPage /></Layout>} />
          <Route path="*" element={<Layout hideFloatingCTA><NotFoundPage /></Layout>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
