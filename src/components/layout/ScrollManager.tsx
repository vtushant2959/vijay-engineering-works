import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * React Router doesn't restore scroll position or honor #hash targets on
 * client-side navigation the way a full page load would. This replicates
 * that behavior: scroll to top on a new path, or to the matching element
 * when the URL includes a hash (e.g. /about#infrastructure).
 */
export function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return;
    }
    const id = hash.replace('#', '');
    // Wait a tick so the destination page has rendered before we measure it.
    const timeout = window.setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 80);
    return () => window.clearTimeout(timeout);
  }, [pathname, hash]);

  return null;
}
