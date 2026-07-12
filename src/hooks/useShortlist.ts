import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'vew-product-shortlist';

function readStorage(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function writeStorage(slugs: string[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs));
  window.dispatchEvent(new CustomEvent('vew-shortlist-change'));
}

/**
 * A localStorage-backed "enquiry shortlist" so visitors can collect several
 * machines from across the catalog and submit one combined enquiry, instead
 * of filling the contact form separately per product.
 */
export function useShortlist() {
  const [slugs, setSlugs] = useState<string[]>(() => readStorage());

  useEffect(() => {
    const sync = () => setSlugs(readStorage());
    window.addEventListener('vew-shortlist-change', sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener('vew-shortlist-change', sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  const add = useCallback((slug: string) => {
    setSlugs((prev) => {
      if (prev.includes(slug)) return prev;
      const next = [...prev, slug];
      writeStorage(next);
      return next;
    });
  }, []);

  const remove = useCallback((slug: string) => {
    setSlugs((prev) => {
      const next = prev.filter((s) => s !== slug);
      writeStorage(next);
      return next;
    });
  }, []);

  const toggle = useCallback((slug: string) => {
    setSlugs((prev) => {
      const next = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug];
      writeStorage(next);
      return next;
    });
  }, []);

  const clear = useCallback(() => {
    setSlugs([]);
    writeStorage([]);
  }, []);

  return { slugs, add, remove, toggle, clear, has: (slug: string) => slugs.includes(slug) };
}
