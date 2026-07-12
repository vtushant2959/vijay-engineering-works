import { type ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingCTA } from './FloatingCTA';
import { Breadcrumb } from './Breadcrumb';

interface LayoutProps {
  children: ReactNode;
  showBreadcrumb?: boolean;
  breadcrumbItems?: { label: string; href?: string }[];
  hideFloatingCTA?: boolean;
}

export function Layout({ children, showBreadcrumb, breadcrumbItems, hideFloatingCTA }: LayoutProps) {
  return (
    <div className="min-h-screen-safe flex flex-col">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-grow">
        {showBreadcrumb && breadcrumbItems && <Breadcrumb items={breadcrumbItems} />}
        {children}
      </main>
      <Footer />
      {!hideFloatingCTA && <FloatingCTA />}
    </div>
  );
}
